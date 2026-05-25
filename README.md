# Relay

AI multi-agent workspace for collaborative product planning, architecture, and execution.

Designed and Developed by [Agra Yuda](https://github.com/agrahub). Built by [Yuda Works](https://github.com/yuda-works).

---

## Overview

Relay simulates a collaborative AI product team.

Give Relay an idea, and specialized AI agents work together to transform it into a structured product plan.

Example input:

> “Build a SaaS platform for restaurant reservations.”

Relay coordinates multiple AI agents such as:

- CEO
- Product Manager
- Designer
- Engineer
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

- Groq
- OpenRouter

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
CEO Agent
    ↓
PM Agent
    ↓
Designer Agent
    ↓
Engineer Agent
    ↓
Reviewer Agent
```

Each agent receives the previous context and contributes specialized outputs.

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

### Environment Variables

Create a `.env.local` file:

```env
OPENROUTER_API_KEY=
GROQ_API_KEY=
```

---

### Run Development Server

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

### v2

- [ ] Authentication
- [ ] Persistent projects
- [ ] Conversation history
- [ ] Database integration

### v3

- [ ] Branching workflows
- [ ] Tool calling
- [ ] Web search integration
- [ ] GitHub integration

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