"use client"

import { CheckCircle2, Download, Loader2, Play, Send } from "lucide-react"
import * as React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { Sidebar } from "@/components/sidebar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { H2, H4, P } from "@/components/ui/typography"
import { AGENTS } from "@/data/agents"
import { useOrchestration } from "@/hooks/use-orchestration"

export default function Page() {
  const [hasStarted, setHasStarted] = React.useState(false)
  const { prompt, setPrompt, isStreaming, activeAgentIndex, outputs, currentStream, error, isFinished, startWorkflow, download } = useOrchestration()

  const activeAccordion = activeAgentIndex >= 0 ? AGENTS[activeAgentIndex].key : undefined
  const isStartAllowed = prompt.trim() && !isStreaming

  const handleStart = () => {
    if (!isStartAllowed) return
    setHasStarted(true)
    startWorkflow()
  }

  return (
    <SidebarProvider>
      <Sidebar activeAgentIndex={activeAgentIndex} isWorkflowFinished={isFinished} />
      <SidebarInset className="h-screen">
        {/* Header Area */}
        <header className="flex h-12 px-2 md:px-4 gap-2 items-center shrink-0 border-b ease-linear">
          <div className="flex w-full items-center gap-1 md:gap-2">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-1 md:mr-2" />
            <h1 className="font-medium">Workspace</h1>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <ThemeToggle />
            <Button onClick={() => download()} disabled={outputs.length === 0}>
              <Download />
              Download
            </Button>
          </div>
        </header>

        {/* Main Area */}
        <section className="flex-1 min-h-0 max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto p-4 md:p-6 overflow-y-auto scroll-smooth">
          {!hasStarted ? (
            <div className="flex flex-col py-32 text-center items-center">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-sm">
                <Play className="w-8 h-8 text-zinc-400 dark:text-zinc-500" />
              </div>
              <H2>Start a new workflow</H2>
              <P className="text-sm max-w-sm">
                Provide a product idea below. Relay will orchestrate specialized AI agents sequentially to build your product specs.
              </P>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {error && (
                <div className="p-4 rounded-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800">
                  {error}
                </div>
              )}

              <Accordion
                type="single"
                collapsible
                value={activeAccordion}
                className="max-w-3xl md:max-w-5xl lg:max-w-7xl"
              >
                {AGENTS.map((agent, index) => {
                  const output = outputs.find(o => o.agent === agent.key)
                  const isCurrentlyStreaming = isStreaming && activeAgentIndex === index

                  if (!output && !isCurrentlyStreaming) return null

                  return (
                    <AccordionItem key={agent.key} value={agent.key}>
                      <AccordionTrigger>
                        <div className="flex items-center gap-3 text-left">
                          {isCurrentlyStreaming ? (
                            <Loader2 className="w-5 h-5 text-zinc-500 animate-spin" />
                          ) : (
                            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                          )}
                          <H4>{agent.name}</H4>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="prose prose-zinc dark:prose-invert max-w-none prose-h3:mt-6 prose-h3:mb-3 prose-p:my-2 prose-ul:my-2 prose-li:my-0">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {isCurrentlyStreaming ? currentStream : (output?.content || "")}
                          </ReactMarkdown>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </div>
          )}
        </section>

        {/* Input Area */}
        <footer className="flex flex-col h-20 px-2 md:px-4 items-center justify-center shrink-0 border-t">
          <div className="w-full max-w-3xl relative">
            <Input
              placeholder="Describe your product idea to start..."
              className="pr-12 py-6 border-zinc-300 dark:border-zinc-700 focus-visible:ring-1 focus-visible:ring-zinc-500"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleStart()
              }}
              disabled={isStreaming}
            />
            <Button
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9"
              onClick={handleStart}
              disabled={!isStartAllowed}
            >
              <Send />
            </Button>
          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  )
}
