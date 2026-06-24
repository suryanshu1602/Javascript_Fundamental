# Chapter 19 — Playwright Basics

This chapter covers the fundamentals of Playwright for browser automation and testing.

## Setup

- Install dependencies: `npm install` (already done)
- Browsers are installed via Playwright

## Running Tests

```bash
npx playwright test
```

To run a specific test:

```bash
npx playwright test example
```

## Contents

| File | Description |
|------|-------------|
| `tests/example.spec.ts` | Basic test — verifies page title on TTACart |
| `playwright.config.ts` | Playwright test configuration |
