export const AGENTS = [
  {
    key: "business-analyst",
    name: "Business Analyst",
  },
  {
    key: "system-analyst",
    name: "System Analyst",
  },
  {
    key: "product-manager",
    name: "Product Manager",
  },
  {
    key: "ux-designer",
    name: "UX Designer",
  },
  {
    key: "software-architect",
    name: "Software Architect",
  },
  {
    key: "software-engineer",
    name: "Software Engineer",
  },
  {
    key: "qa-engineer",
    name: "QA Engineer",
  },
  {
    key: "technical-writer",
    name: "Technical Writer",
  },
  {
    key: "reviewer",
    name: "Reviewer",
  },
] as const

export type Agent = (typeof AGENTS)[number]
export type AgentKey = Agent["key"]
export type AgentName = Agent["name"]
