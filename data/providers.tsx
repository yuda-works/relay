export const PROVIDERS = [
  {
    key: "openrouter",
    name: "OpenRouter",
  },
  {
    key: "groq",
    name: "Groq",
  },
] as const

export type Provider = (typeof PROVIDERS)[number]
export type ProviderKey = Provider["key"]
export type ProviderName = Provider["name"]
