import OpenAI from "openai"

import type { ProviderKey } from "@/data/providers"

export interface ProviderConfig { provider: ProviderKey; apiKey: string }

export function createProviderClient({ provider, apiKey }: ProviderConfig) {
  let baseURL = ""

  if (provider === "openrouter") {
    baseURL = process.env.NEXT_PUBLIC_OPENROUTER_URL ?? ""
  } else if (provider === "groq") {
    baseURL = process.env.NEXT_PUBLIC_GROQ_URL ?? ""
  } else {
    throw new Error(`Unsupported provider: ${provider}`)
  }

  return new OpenAI({
    apiKey,
    baseURL,
    dangerouslyAllowBrowser: false, // We will only use this in Server/Route handlers
    defaultHeaders: provider === "openrouter" ? {
      "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
      "X-Title": "Relay AI Workspace",
    } : undefined,
  })
}
