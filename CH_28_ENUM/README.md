# Enum_Fn.ts — Simple Explanation

## What is an Enum?
An **enum** is like a **list of fixed choices**. Like a menu in a restaurant — you can only pick what's on the menu.

---

### 1. `SeverityLevels` Enum — Bug Priority Levels

```ts
enum SeverityLevels {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical",
    BLOCKING = "blocking"
}
```

**Think of it like:** A school report card:
- **LOW** → "low" — small mistake, no big deal
- **MEDIUM** → "medium" — needs attention
- **HIGH** → "high" — serious problem
- **CRITICAL** → "critical" — very serious!
- **BLOCKING** → "blocking" — everything is stopped!

**Teacher's note:** Instead of remembering numbers (1,2,3), we use clear names like `LOW`, `HIGH`. Much easier!

---

### 2. `Environment` Enum — Website Addresses

```ts
enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}
```

**Think of it like:** Your school has different rooms:
- **Dev** → The practice room (where teachers prepare)
- **Staging** → The rehearsal room (pretend class)
- **QA** → The checking room (testing everything works)
- **Prod** → The real classroom (where students actually study!)

---

### 3. Printing the Values

```ts
console.log(SeverityLevels.LOW);   // → "low"
console.log(Environment.QA);       // → "https://qa.api.com"
```

**Think of it like:** Opening a labeled box and reading what's written inside.

---

### 4. Why Use Enums?

| Problem | Solution |
|---------|----------|
| Typing `"low"` might have spelling mistakes | Use `SeverityLevels.LOW` — always correct! |
| Forgetting which number = which level | Names are clear: `HIGH`, `LOW` |
| Changing a value later | Change in one place, not everywhere |

**In short:** Enums are like a **drop-down menu** — you can only pick from the options given! ✅
