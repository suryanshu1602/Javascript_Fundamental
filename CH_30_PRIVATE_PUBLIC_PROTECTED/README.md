# Chapter 30 — Private, Public, Protected & Readonly

## Files

| File | Description |
|------|-------------|
| `PPP.ts` | `public`, `private`, `protected` access modifiers — `APIClient` class |
| `PageObjectModel.ts` | `protected` in Page Object Model pattern — `BasePage` → `LoginPage` |
| `Abstract_Class.ts` | Abstract class with `abstract` methods — `BaseTest` → `UITest` |
| `READONLY.ts` | `readonly` modifier — `PlaywrightConfig` with immutable fields |

## PPP.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | `public` | `public baseURL` — accessible everywhere |
| Q2 | `private` | `private apiKey` / `private getAuthHeader()` — only within the class |
| Q3 | `protected` | `protected timeout` — accessible in class and subclasses |

## PageObjectModel.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | `protected` in POM | `protected baseURL` / `protected navigate()` — shared with child classes |
| Q2 | `extends` | `class LoginPage extends BasePage` — inheritance |

## Abstract_Class.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Abstract class | `abstract class BaseTest` — cannot be instantiated directly |
| Q2 | Abstract methods | `abstract setup(): void` — must be implemented by subclasses |
| Q3 | Concrete methods | `loan1(): void` — optional non-abstract methods in abstract class |

## READONLY.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | `readonly` | `readonly baseURL: string` — set once in constructor, never reassigned |

## Run

```bash
npx tsx CH_30_PRIVATE_PUBLIC_PROTECTED/PPP.ts
npx tsx CH_30_PRIVATE_PUBLIC_PROTECTED/PageObjectModel.ts
npx tsx CH_30_PRIVATE_PUBLIC_PROTECTED/Abstract_Class.ts
npx tsx CH_30_PRIVATE_PUBLIC_PROTECTED/READONLY.ts
```
