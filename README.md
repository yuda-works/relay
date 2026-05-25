# Relay

AI multi-agent workspace for collaborative product planning, architecture, and execution.

Designed and developed by [Agra Yuda](https://github.com/agrahub).  
Built by [Yuda Works](https://github.com/yuda-works).

---

## Overview

Relay simulates a collaborative AI product organization.

Give Relay an idea, and specialized AI agents work together to transform it into a structured product plan.

Example input:

> “Build a SaaS platform for restaurant reservations.”

Relay coordinates multiple AI agents such as:

- Business Analyst
- System Analyst
- Product Manager
- UX Designer
- Software Architect
- Software Engineer
- QA Engineer
- Technical Writer
- Reviewer

Each agent contributes from its own perspective to help shape the final product direction.

---

## Features

- Multi-agent orchestration workflow
- Sequential AI collaboration
- Streaming responses
- Structured markdown outputs
- Modern workspace UI
- Real-time generation experience
- Product planning assistance
- Architecture and implementation suggestions
- Automated documentation generation
- QA and testing analysis
- Bring Your Own Key (BYOK) architecture
- Multi-provider AI support

---

## Tech Stack

### Frontend

- Next.js
- React
- Tailwind CSS
- shadcn/ui
- Framer Motion

### Backend

- Next.js Route Handlers
- Vercel AI SDK

### AI Providers

- OpenRouter
- Groq

### Deployment

- Vercel
- Cloudflare

---

## Architecture

```txt
User Prompt
    ↓
Orchestrator
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

Each agent receives the previous context and contributes specialized outputs.

---

## BYOK (Bring Your Own Key)

Relay uses a Bring Your Own Key (BYOK) architecture.

Users provide their own AI provider API keys, allowing them to:

- control their own usage and costs
- choose their preferred AI provider
- use their own model configurations
- safely use Relay without shared API quotas

Supported providers:

- OpenRouter
- Groq

API keys are intended to be stored locally on the client side and are never committed to the repository.

---

## Project Structure

```txt
src/
├── app/
├── components/
├── lib/
│   ├── agents/
│   ├── prompts/
│   └── orchestrator/
├── hooks/
├── styles/
└── types/
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

---

### Installation

```bash
git clone https://github.com/yuda-works/relay.git

cd relay

pnpm install
```

---

## Environment Variables

Relay primarily uses user-provided API keys (BYOK).

Some optional environment variables may still be used during development:

```env
OPENROUTER_API_KEY=
GROQ_API_KEY=
```

---

## Run Development Server

```bash
pnpm dev
```

Open:

```txt
http://localhost:3000
```

---

## Roadmap

### v1

- [x] Sequential agent orchestration
- [x] Streaming responses
- [x] Workspace UI
- [x] Markdown rendering
- [ ] Agent activity states
- [ ] Provider settings panel
- [ ] Model selection
- [ ] Exportable markdown outputs

### v2

- [ ] Authentication
- [ ] Persistent projects
- [ ] Conversation history
- [ ] Database integration
- [ ] Encrypted API key storage
- [ ] Collaborative workspaces

### v3

- [ ] Branching workflows
- [ ] Tool calling
- [ ] Web search integration
- [ ] GitHub integration
- [ ] Exportable project artifacts
- [ ] Agent customization

---

## Design Philosophy

Relay focuses on structured AI collaboration rather than autonomous chaos.

Instead of unrestricted agent loops, Relay uses orchestrated workflows that are:

- predictable
- explainable
- modular
- product-oriented

The goal is to create practical AI collaboration tools that feel like real software products.

---

## Status

Relay is currently under active development.

---

## License

MIT

---

## Credits

Built by Yuda Works.

Primary design and development by [Agra Yuda](https://github.com/agrahub).