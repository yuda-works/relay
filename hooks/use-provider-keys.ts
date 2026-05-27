import * as React from "react"

import type { ProviderKey } from "@/data/providers"

export type ProviderKeys = Record<ProviderKey, string>

export function useProviderKeys() {
  // Lazy initialize state from localStorage to avoid setState in useEffect
  const [keys, setKeys] = React.useState<ProviderKeys>(() => {
    try {
      const stored = localStorage.getItem("relayProviderKeys")
      return stored ? JSON.parse(stored) : { openrouter: "", groq: "" }
    } catch {
      return { openrouter: "", groq: "" }
    }
  })
  const [activeProvider, setActiveProvider] = React.useState<ProviderKey>(() => {
    if (typeof window === "undefined") return "openrouter"  // SSR guard
    const stored = localStorage.getItem("relayActiveProvider")
    return stored === "groq" ? stored : "openrouter"
  })

  const updateKey = (provider: ProviderKey, key: string) => {
    const newKeys = { ...keys, [provider]: key }
    setKeys(newKeys)
    if (typeof window !== "undefined")
      localStorage.setItem("relayProviderKeys", JSON.stringify(newKeys))
  }

  const updateProvider = (provider: ProviderKey) => {
    setActiveProvider(provider)
    if (typeof window !== "undefined")
      localStorage.setItem("relayActiveProvider", provider)
  }

  return { keys, activeProvider, updateKey, updateProvider }
}
