# Chapter 27 — TypeScript Interface

## Files

| File | Description |
|------|-------------|
| `IF.ts` | TypeScript interface example — `TestCase` interface with optional properties |
| `IF_Part2.ts` | TypeScript interface example — `APIResponse` interface with optional headers & responseTime |

## IF.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Interface definition | `interface TestCase { ... }` — defines object shape |
| Q2 | Optional property | `duration?: number` — property may be omitted |
| Q3 | Type-checked object | `let test1: TestCase = { ... }` — enforces interface contract |

## Run

```bash
cd CH_27_Typescript_Interface
npx tsc IF.ts --outDir out --strict
node out/IF.js
```
