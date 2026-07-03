# Chapter 31 — Type Assertion, Override & Type Alias — Interview Questions

## Q1: What is type assertion (`as`) in TypeScript?

It tells TypeScript *"I know the type better than you"*. It doesn't change the data at runtime — it's just a compile-time hint so you can access properties without errors.

```ts
let data: unknown = { name: "Alice" };
let user = data as { name: string };
console.log(user.name); // ✅ TypeScript allows it now
```

---

## Q2: When would you use type assertion?

When you get data from an external source (API, `JSON.parse`, DOM) that TypeScript sees as `unknown` or a broad type, but you know the exact shape.

```ts
let raw: unknown = JSON.parse('{"status":200}');
let res = raw as { status: number };
```

---

## Q3: Difference between `as` and angle bracket syntax?

Both do the same thing. Angle brackets can conflict with JSX (React), so `as` is preferred.

```ts
let a = value as string;   // ✅ preferred
let b = <string>value;     // ❌ conflicts with JSX
```

---

## Q4: What does `override` do in TypeScript?

It marks a method in a child class that **replaces** the parent's version. TypeScript checks that the parent actually has that method — if not, it throws an error.

```ts
class Father {
  home() { console.log("2BHK"); }
}
class Son extends Father {
  override home() { console.log("3BHK"); } // ✅ overrides
}
```

---

## Q5: What happens if you use `override` but the method doesn't exist in the parent?

TypeScript throws a compile-time error — no silent mistakes.

```ts
class Son extends Father {
  override car() { } // ❌ Error: No method 'car' in Father
}
```

---

## Q6: Can you override a method without the `override` keyword?

Yes, but it's risky. Without `override`, if the parent method name changes, the child method becomes a separate unrelated method. The `override` keyword catches that.

---

## Q7: What is polymorphism in the context of override?

Same method name, different behavior per class. Each child class does its own version.

```ts
class LoginTest { override nihit_ready() { /* open browser + maximize */ } }
class APITest   { override nihit_ready() { /* no browser */ } }
```
