import fs from "fs"
import path from "path"

import type { AgentKey } from "@/data/agents"

export function getAgentPrompt(agent: AgentKey): string {
  const filePath = path.join(process.cwd(), "docs", "agents", `${agent}.md`)

  try {
    const content = fs.readFileSync(filePath, "utf-8")
    return content
  } catch (error) {
    console.error(`Error reading agent definition for ${agent}:`, error)
    return `You are the ${agent}. Provide a structured markdown response based on your role.`
  }
}
