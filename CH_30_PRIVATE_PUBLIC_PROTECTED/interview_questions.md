# Chapter 30 — Private, Public, Protected & Readonly — Interview Questions

## Q1: What is the difference between `public`, `private`, and `protected` in TypeScript?

| Modifier | Accessible in same class | Accessible in subclass | Accessible outside class |
|----------|--------------------------|------------------------|-------------------------|
| `public` | ✅ Yes | ✅ Yes | ✅ Yes |
| `private` | ✅ Yes | ❌ No | ❌ No |
| `protected` | ✅ Yes | ✅ Yes | ❌ No |

```ts
class APIClient {
  public baseURL: string;       // ✅ anyone can read/write
  private apiKey: string;       // ✅ only inside APIClient
  protected timeout: number;    // ✅ inside APIClient + subclasses
}
```

---

## Q2: What does `readonly` do?

It allows reading the property but **prevents reassignment** after the constructor runs.

```ts
class Config {
  readonly baseURL: string;
  constructor(url: string) {
    this.baseURL = url;   // ✅ allowed in constructor
  }
}
const c = new Config("https://api.com");
// c.baseURL = "https://other.com";  // ❌ Error: readonly
```

---

## Q3: Can a subclass access `private` members of its parent?

No. `private` members are only accessible within the class that defines them.

```ts
class Parent {
  private secret = "hidden";
}
class Child extends Parent {
  show() {
    // console.log(this.secret);  // ❌ Error: Property 'secret' is private
  }
}
```

---

## Q4: Can a subclass access `protected` members of its parent?

Yes. `protected` members are accessible in the class and any subclass.

```ts
class BasePage {
  protected navigate(path: string) { ... }
}
class LoginPage extends BasePage {
  login() {
    this.navigate("/login");  // ✅ allowed
  }
}
```

---

## Q5: What is an abstract class?

A class that **cannot be instantiated directly**. It serves as a base class and may contain `abstract` methods that subclasses must implement.

```ts
abstract class BaseTest {
  abstract setup(): void;  // must be implemented by subclass
}
// let t = new BaseTest();  // ❌ Error: Cannot create instance of abstract class
```

---

## Q6: Difference between `abstract class` and `interface`?

| Feature | Abstract class | Interface |
|---------|---------------|-----------|
| Can have implementation | ✅ Yes (concrete methods) | ❌ No (shape only) |
| Can have constructor | ✅ Yes | ❌ No |
| Multiple inheritance | ❌ Single extends | ✅ Multiple implements |
| Access modifiers | ✅ public/private/protected | ❌ All implied public |

---

## Q7: Can you combine `readonly` with access modifiers?

Yes.

```ts
class Example {
  public readonly id: number;       // ✅ public + readonly
  private readonly secret: string;  // ✅ private + readonly
  protected readonly timeout: number; // ✅ protected + readonly
}
```

---

## Q8: When would you use `protected` in real projects?

Page Object Model (POM) is a common use case. Base page classes define `protected` helpers (like `navigate`) that child page objects reuse without exposing them to test scripts.

```ts
class BasePage {
  protected navigate(path: string) { ... }
}
class LoginPage extends BasePage { ... }  // ✅ uses navigate internally
// test script: page.login()    // ✅ clean API
// test script: page.navigate() // ❌ not accessible — protected
```
