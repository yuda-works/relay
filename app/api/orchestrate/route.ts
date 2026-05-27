import { getAgentPrompt } from "@/lib/agent"
import { createProviderClient } from "@/lib/provider"

import type { AgentKey } from "@/data/agents"
import type { ProviderKey } from "@/data/providers"
import type { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { prompt, agent, previousOutputs } = await req.json()

    const authHeader = req.headers.get("Authorization")
    const providerHeader = req.headers.get("X-Provider") as ProviderKey

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response("Missing or invalid Authorization header", { status: 401 })
    }

    const apiKey = authHeader.split("Bearer ")[1]

    if (!providerHeader || !["openrouter", "groq"].includes(providerHeader)) {
      return new Response("Missing or invalid X-Provider header", { status: 400 })
    }

    const client = createProviderClient({ apiKey, provider: providerHeader })
    const model = providerHeader === "groq" ? "llama-3.3-70b-versatile" : "anthropic/claude-3.5-sonnet"

    const agentPrompt = getAgentPrompt(agent as AgentKey)

    // Construct System Prompt
    let systemContent = `You are acting as the following role:\n\n${agentPrompt}\n\n`
    systemContent += `Follow the output rules and examples specified in your role definition above. Do NOT use markdown headings smaller than H3 unless absolutely necessary to avoid crowding. Always space your sections clearly.`

    // Construct User Prompt with Orchestration Context
    let userContent = `ORIGINAL USER PROMPT:\n${prompt}\n\n`

    if (previousOutputs && previousOutputs.length > 0) {
      userContent += `--- PREVIOUS AGENT OUTPUTS ---\n`
      for (const out of previousOutputs) {
        userContent += `[Agent: ${out.agent}]\n${out.content}\n\n`
      }
      userContent += `--- END PREVIOUS OUTPUTS ---\n\n`
      userContent += `Please provide your specialized output based on your role, taking into account the original prompt and building upon the previous agent outputs. Do not destructively override established requirements.`
    } else {
      userContent += `Please provide your specialized output based on your role. You are the first agent in the pipeline.`
    }

    const response = await client.chat.completions.create({
      model,
      messages: [
        { role: "system", content: systemContent },
        { role: "user", content: userContent },
      ],
      stream: true,
    })

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of response) {
            const text = chunk.choices[0]?.delta?.content || ""
            if (text) {
              controller.enqueue(new TextEncoder().encode(text))
            }
          }
          controller.close()
        } catch (error) {
          controller.error(error)
        }
      },
    })

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    })
  } catch (error: unknown) {
    console.error("Orchestration error:", error)
    const msg = typeof error === 'object' && error !== null && 'message' in error ? (error as { message?: string }).message : String(error)
    return new Response(msg || "Internal Server Error", { status: 500 })
  }
}
