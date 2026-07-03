# Chapter 31 — Type Assertion, Override & Type Alias

## Files

| File | Description |
|------|-------------|
| `Type_As.ts` | Type assertion with `as` — casting `unknown` DOM element to typed interface |
| `Type_Alias_As.ts` | Type assertion with `as` — casting API response to typed interface |
| `Override.ts` | Method `override` — child classes replace parent method behavior |
| `IQ.ts` | Interview-style `override` example — Father (2BHK) vs Pramod (3BHK) |
| `Decorator.ts` | Method decorator — `@Log` logs method calls and arguments |
| `Decortors_2.ts` | TC39 Stage 3 decorator — `@logged` wraps method with logging |
| `Multiple_Decor.ts` | Multiple decorators on one method — `@beforeSomething` + `@BeforeSomeSomeThing` |

## Type_As.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | `unknown` type | Safe container for data of unknown shape |
| Q2 | Type assertion | `element as elementI` — tell TypeScript the shape at compile time |

## Type_Alias_As.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | API pattern | `rawResponse as UserResponse` — cast API JSON to interface |
| Q2 | Nested interface | `body: { user: string; role: string }` — inline object shape |

## Override.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Method override | `override nihit_ready()` — child replaces parent's version |
| Q2 | Polymorphism | Each child class (`LoginTest`, `APITest`) has its own behavior |

## Multiple_Decor.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Multiple decorators | `@beforeSomething` `@BeforeSomeSomeThing` — stacking behaviors |
| Q2 | Decorator order | Bottom decorator runs first (SLEEP), top runs second (EAT) — output is EAT then SLEEP |

## Decortors_2.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | TC39 decorator | `@logged` — modern decorator with `(originalMethod, context)` signature |
| Q2 | Wrapper pattern | `return function(...)` — replaces original with wrapped version |

## Decorator.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Method decorator | `@Log` — wraps a method to add behavior |
| Q2 | PropertyDescriptor | `descriptor.value` — the original method being wrapped |

## IQ.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | `override` keyword | `override home()` — ensures method actually exists in parent |
| Q2 | Inheritance | `Pramod extends Father` — child gets parent's methods |

## Run

```bash
npx tsx CH_31_Type_Overide_Decortors/Type_As.ts
npx tsx CH_31_Type_Overide_Decortors/Type_Alias_As.ts
npx tsx CH_31_Type_Overide_Decortors/Override.ts
npx tsx CH_31_Type_Overide_Decortors/IQ.ts
npx tsx CH_31_Type_Overide_Decortors/Decorator.ts
npx tsx CH_31_Type_Overide_Decortors/Decortors_2.ts
npx tsx CH_31_Type_Overide_Decortors/Multiple_Decor.ts
```
