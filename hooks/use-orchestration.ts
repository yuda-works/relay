import * as React from "react"

import { AGENTS, type AgentKey } from "@/data/agents"

import { useProviderKeys } from "./use-provider-keys"

export type AgentOutput = {
  agent: AgentKey;
  content: string;
}

export function useOrchestration() {
  const { keys, activeProvider } = useProviderKeys()
  const [prompt, setPrompt] = React.useState("")
  const [isStreaming, setIsStreaming] = React.useState(false)
  const [activeAgentIndex, setActiveAgentIndex] = React.useState(-1)
  const [outputs, setOutputs] = React.useState<AgentOutput[]>([])
  const [currentStream, setCurrentStream] = React.useState("")
  const [error, setError] = React.useState<string | null>(null)
  const [isFinished, setIsFinished] = React.useState(false)

  const startWorkflow = async () => {
    setIsStreaming(true)
    setOutputs([])
    setCurrentStream("")
    setError(null)
    setIsFinished(false)

    const apiKey = keys[activeProvider]

    if (!apiKey) {
      setError("Please configure your API key in Settings.")
      setIsStreaming(false)
      return
    }

    let accumulatedOutputs: AgentOutput[] = []

    for (let i = 0; i < AGENTS.length; i++) {
      const currentAgent = AGENTS[i].key
      setActiveAgentIndex(i)
      setCurrentStream("")

      try {
        const res = await fetch("/api/orchestrate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
            "X-Provider": activeProvider,
          },
          body: JSON.stringify({
            prompt,
            agent: currentAgent,
            previousOutputs: accumulatedOutputs,
          }),
        })

        if (!res.ok) {
          throw new Error(await res.text())
        }

        if (!res.body) throw new Error("No response body")

        const reader = res.body.getReader()
        const decoder = new TextDecoder("utf-8")
        let done = false
        let fullChunk = ""

        while (!done) {
          const { value, done: readerDone } = await reader.read()
          done = readerDone
          if (value) {
            const chunk = decoder.decode(value, { stream: !done })
            fullChunk += chunk
            setCurrentStream(fullChunk)
          }
        }

        // Agent finished, push to accumulated outputs
        const finalOutput = { agent: currentAgent, content: fullChunk }
        accumulatedOutputs = [...accumulatedOutputs, finalOutput]
        setOutputs(accumulatedOutputs)
      } catch (error: unknown) {
        const msg = typeof error === 'object' && error !== null && 'message' in error ? (error as { message?: string }).message : String(error)
        setError(msg || `An error occurred during orchestration for ${currentAgent}`)
        break // Stop the pipeline on error
      }
    }

    setIsStreaming(false)
    setActiveAgentIndex(-1)
    setCurrentStream("")
    setIsFinished(true)
  }

  const download = () => {
    if (outputs.length === 0) return
    let mdContent = `# Relay Product Specs\n\n`
    mdContent += `**Original Prompt:**\n${prompt}\n\n`
    outputs.forEach(out => {
      mdContent += `## Agent: ${out.agent}\n\n`
      mdContent += `${out.content}\n\n---\n\n`
    })
    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'relay-specs.md'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return {
    prompt,
    setPrompt,
    isStreaming,
    activeAgentIndex,
    outputs,
    currentStream,
    error,
    isFinished,
    startWorkflow,
    download,
  }
}
