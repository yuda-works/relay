# AGENTS.md

# Relay — Product Instructions

Relay is a multi-agent AI workspace for collaborative product planning, architecture, and execution.

Designed and developed by Agra Yuda.  
Built by Yuda Works.

Relay simulates a structured software product organization where specialized AI agents collaborate sequentially to transform ideas into actionable product and engineering outputs.

This repository must prioritize:
- structured orchestration
- clarity of outputs
- maintainability
- operational simplicity
- realistic workflows
- practical engineering value

Relay is NOT:
- an autonomous AI experiment
- an uncontrolled recursive agent system
- a gimmicky “AI swarm”
- a hype-driven AI product

Relay should feel:
- engineered
- structured
- reliable
- practical
- technically credible

---

# Product Philosophy

Relay focuses on structured collaboration between specialized AI agents.

The goal is not to simulate chaos or unrestricted autonomy.

The goal is to:
- create predictable workflows
- generate useful artifacts
- support practical product planning
- assist engineering execution
- improve clarity and organization

Every feature should improve:
- workflow clarity
- output quality
- orchestration reliability
- usability
- operational simplicity

Avoid:
- unnecessary autonomous behavior
- recursive uncontrolled loops
- novelty-driven AI features
- speculative complexity
- “magic” behavior without transparency

AI behavior should remain:
- understandable
- inspectable
- deterministic where possible
- modular
- easy to debug

---

# Core Workflow

Relay uses sequential orchestration.

Each agent receives:
- the original user prompt
- orchestration context
- outputs from previous agents

Agents contribute specialized outputs from their domain perspective.

Default orchestration pipeline:

```txt
User Prompt
    ↓
Business Analyst
    ↓
System Analyst
    ↓
Product Manager
    ↓
UX Designer
    ↓
Software Architect
    ↓
Software Engineer
    ↓
QA Engineer
    ↓
Technical Writer
    ↓
Reviewer
```

Agents should not:
- override previous outputs destructively
- ignore orchestration context
- invent unrelated features
- contradict established requirements without explanation

---

# Agent Definitions

Detailed agent specifications are located in:

```txt
/docs/agents
```

Each agent definition contains:
- purpose
- responsibilities
- input expectations
- output requirements
- focus areas
- operational constraints
- communication style
- anti-patterns
- example output structure

Current agent lineup:

```txt
Business Analyst
System Analyst
Product Manager
UX Designer
Software Architect
Software Engineer
QA Engineer
Technical Writer
Reviewer
```

Agents execute sequentially through the orchestration pipeline.

Each agent receives:
- the original user prompt
- orchestration context
- outputs from previous agents

Agents should:
- remain scoped to their responsibilities
- avoid overriding previous outputs destructively
- avoid introducing unrelated scope
- prioritize structured and actionable outputs
- maintain orchestration consistency

Detailed orchestration behavior and role expectations must remain aligned with the specifications inside `/docs/agents`.

---

# Output Rules

All agent outputs should:
- use structured markdown
- remain concise
- remain actionable
- avoid excessive verbosity
- prioritize clarity

Prefer:
- headings
- bullet lists
- tables when useful
- clearly separated sections

Avoid:
- walls of text
- excessive filler
- hype-driven language
- vague generalizations

Outputs should feel:
- professional
- technical
- implementation-oriented

---

# AI Provider Architecture

Relay uses a Bring Your Own Key (BYOK) architecture.

Users provide their own API keys.

Supported providers:
- OpenRouter
- Groq

The application must NOT:
- expose secret keys publicly
- hardcode provider credentials
- rely on shared public inference keys

API keys should:
- remain client-controlled
- remain locally stored where possible
- never be committed to the repository

---

# Frontend Direction

Relay should feel:
- calm
- technical
- modern
- structured
- productivity-focused

Preferred UI direction:
- dark-first
- clean spacing
- restrained color usage
- subtle layering
- minimal distractions

Avoid:
- glowing gradients
- overly playful visuals
- excessive animation
- “AI hype” aesthetics
- visually noisy layouts

The interface should resemble:
- professional developer tooling
- modern productivity software
- engineering platforms

---

# UX Principles

Prioritize:
1. clarity
2. workflow visibility
3. structured outputs
4. usability
5. low cognitive load

Users should always understand:
- which agent is active
- what each agent is doing
- how outputs are connected
- orchestration progress

Avoid:
- hidden orchestration behavior
- confusing autonomous actions
- opaque AI decision-making

---

# Technical Stack

Core stack:
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Vercel AI SDK
- pnpm

Use:
- App Router
- Server Components by default
- Route Handlers for orchestration APIs
- streaming responses
- typed architecture

Avoid:
- unnecessary client-side state
- excessive hydration
- oversized dependencies
- unnecessary abstraction layers

---

# Folder Conventions

Preferred structure:

```txt
src/
├── app/
├── components/
├── features/
├── hooks/
├── lib/
│   ├── agents/
│   ├── orchestrator/
│   ├── prompts/
│   ├── providers/
│   └── utils/
├── styles/
└── types/
```

Agent-specific logic should remain modular and isolated.

Avoid tightly coupling:
- prompts
- orchestration
- provider logic
- UI state

---

# Orchestration Rules

Orchestration should remain:
- sequential
- deterministic where possible
- inspectable
- modular

Avoid:
- uncontrolled recursive loops
- autonomous self-spawning agents
- hidden prompt mutation
- opaque orchestration chains

Agent execution should remain debuggable.

---

# Dependency Policy

Before adding dependencies:
- verify necessity
- prefer platform-native solutions
- prefer lightweight libraries
- avoid overlapping tooling

Do not add dependencies casually.

Avoid:
- massive AI abstraction frameworks
- unnecessary orchestration libraries
- speculative infrastructure tooling

Prefer simple internal abstractions first.

---

# Performance

Prioritize:
- fast response streaming
- responsive UI
- small bundles
- efficient rendering
- minimal hydration

Avoid:
- unnecessary rerenders
- oversized animation systems
- excessive client-side computation

---

# Accessibility

Accessibility is mandatory.

Ensure:
- semantic HTML
- keyboard accessibility
- visible focus states
- screen reader compatibility
- sufficient contrast

Do not sacrifice usability for aesthetics.

---

# Development Workflow

Before completing tasks:
- run linting
- ensure TypeScript passes
- verify responsive behavior
- verify accessibility
- ensure orchestration consistency

Tasks are not complete if validation fails.

---

# Anti-Patterns

Avoid:
- overengineering
- premature abstraction
- giant orchestration frameworks
- deeply nested architectures
- speculative AI systems
- unnecessary complexity
- feature bloat
- hidden logic
- unclear workflows

Relay should remain:
- understandable
- maintainable
- operationally simple

---

# Final Principle

Relay should feel like a real engineering product organization translated into structured AI workflows.

Every feature, workflow, and architectural decision should reinforce:
- clarity
- reliability
- maintainability
- technical credibility
- practical engineering value