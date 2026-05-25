# Relay Orchestration Architecture

## Overview

Relay uses sequential orchestration between specialized AI agents.

Each agent receives:
- original user prompt
- orchestration context
- outputs from previous agents

Agents contribute specialized outputs from their domain perspective.

---

## Core Principles

Orchestration should remain:
- predictable
- inspectable
- modular
- maintainable
- operationally simple

Avoid:
- uncontrolled recursion
- autonomous self-spawning agents
- hidden orchestration logic
- opaque execution chains

---

## Orchestration Pipeline

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

---

## Agent Execution Rules

Each agent should:
- remain scoped to its role
- respect previous outputs
- avoid contradictory assumptions
- produce structured markdown outputs
- prioritize clarity and practicality

Agents should not:
- override workflow direction destructively
- generate unrelated features
- introduce speculative complexity

---

## Context Passing

Context passed between agents should include:
- original user prompt
- orchestration metadata
- previous outputs
- execution settings

Context should remain:
- explicit
- structured
- inspectable

---

## Prompt Loading

Agent prompts should remain modular.

Preferred structure:

```txt
docs/agents/
```

Avoid:
- giant hardcoded prompt strings
- duplicated prompt logic
- tightly coupled orchestration behavior

---

## Streaming Strategy

Relay should stream:
- orchestration progress
- agent activity states
- partial outputs where practical

Users should always understand:
- active agent
- orchestration stage
- workflow progress

---

## Error Handling

Failures should:
- remain visible
- fail gracefully
- preserve partial outputs
- avoid hidden errors

Avoid:
- silent orchestration failures
- destructive retries
- hidden state mutation

---

## Future Expansion

Future orchestration features may include:
- branching workflows
- conditional execution
- custom agents
- tool calling
- orchestration templates

However, the architecture must remain:
- understandable
- debuggable
- operationally simple