# Chapter 25 — OOP Interview Questions

## Files

| File | Description |
|------|-------------|
| `EX1.js` | OOP interview questions covering 4 pillars of OOP |
| `EX2.js` | More OOP interview questions (chaining, factory, composition, singleton) |
| `EX3.js` | OOP interview questions (prototype, mixin, abstract, freeze) |
| `EX4.js` | OOP interview questions (Symbol, WeakMap, descriptors, static factory) |

## EX1.js Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Private fields | `#balance` — hides data from outside access |
| Q2 | Static methods | `static add()` — called on class, not instance |
| Q3 | Inheritance | `extends` — child class inherits from parent |
| Q4 | Polymorphism | Method overriding — same method, different behavior |
| Q5 | Encapsulation | Getters/setters — controlled property access |

## EX2.js Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Method chaining | `return this` — chain multiple calls |
| Q2 | Factory function | `createPerson()` — function returns object, no `new` |
| Q3 | Composition | Object spread `...` — mix behaviors instead of inherit |
| Q4 | Singleton | IIFE + closure — only one instance allowed |
| Q5 | instanceof | `car instanceof Car` — check object's class |

## EX3.js Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Prototype inheritance | `Person.prototype.greet` — shared methods on blueprint |
| Q2 | Prototype chain | `Object.create(Parent.prototype)` — child inherits from parent |
| Q3 | Mixin pattern | `Object.assign(Class.prototype, mixin)` — copy behaviors |
| Q4 | Abstract class | `new.target` check — prevent direct instantiation |
| Q5 | Object.freeze | `Object.freeze(obj)` — make object immutable |

## EX4.js Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Symbol privacy | `Symbol()` — hidden property keys |
| Q2 | WeakMap privacy | `WeakMap` — truly private data per instance |
| Q3 | Property descriptors | `Object.defineProperty()` — control read/write/enumerate |
| Q4 | Static factory | `static fromSquare()` — alternative constructors |

## Run

```bash
node CH_25_OOP_Interview_Questions/EX1.js
node CH_25_OOP_Interview_Questions/EX2.js
node CH_25_OOP_Interview_Questions/EX3.js
node CH_25_OOP_Interview_Questions/EX4.js
```
