# Relay Features

---

# Sequential Multi-Agent Workflow

Status: Planned  
Priority: Critical

## Purpose

Allow specialized AI agents to collaborate sequentially through structured orchestration.

## User Value

Users receive organized outputs from multiple specialized perspectives.

## Requirements

- sequential orchestration
- agent context passing
- output chaining
- orchestration visibility

## Technical Notes

- server-side orchestration
- streaming support
- modular prompt loading

## Future Expansion

- branching workflows
- conditional execution
- user-defined pipelines

---

# Streaming Responses

Status: Planned  
Priority: Critical

## Purpose

Provide real-time streaming outputs while agents execute.

## User Value

Improves responsiveness and orchestration visibility.

## Requirements

- token streaming
- incremental rendering
- agent execution states

## Technical Notes

- Vercel AI SDK
- server streaming
- incremental UI updates

---

# BYOK Provider Support

Status: Planned  
Priority: Critical

## Purpose

Allow users to provide their own AI provider API keys.

## User Value

Users control:
- costs
- providers
- models
- quotas

## Requirements

- OpenRouter support
- Groq support
- local key storage
- provider switching

## Technical Notes

- localStorage or IndexedDB
- server-side request forwarding
- no shared inference keys

---

# Agent Workspace UI

Status: Planned  
Priority: High

## Purpose

Provide a structured interface for orchestration workflows.

## User Value

Users can:
- follow orchestration progress
- inspect outputs
- navigate agent workflows

## Requirements

- orchestration timeline
- agent panels
- markdown rendering
- responsive layout

## Technical Notes

- mobile-first design
- streaming-safe rendering
- minimal hydration

---

# Markdown Output Rendering

Status: Planned  
Priority: High

## Purpose

Render structured agent outputs cleanly.

## User Value

Improves readability and usability.

## Requirements

- markdown support
- code block rendering
- typography consistency

## Technical Notes

- server rendering preferred
- syntax highlighting
- accessible typography

---

# Model Selection

Status: Planned  
Priority: Medium

## Purpose

Allow users to choose providers and models.

## User Value

Improves flexibility and experimentation.

## Requirements

- provider selection
- model selection
- provider validation

## Technical Notes

- provider abstraction layer
- configurable orchestration settings

---

# Exportable Outputs

Status: Planned  
Priority: Medium

## Purpose

Allow users to export orchestration results.

## User Value

Improves workflow portability and documentation.

## Requirements

- markdown export
- copy support
- downloadable artifacts

## Technical Notes

- client-side export generation
- structured formatting

---

# Persistent Projects

Status: Future  
Priority: Low

## Purpose

Allow users to save orchestration sessions.

## User Value

Supports long-term project workflows.

## Requirements

- authentication
- project storage
- session history

## Technical Notes

- database integration
- project schemas
- user ownership