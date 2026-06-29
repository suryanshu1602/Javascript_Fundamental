// TS_Part3.ts — Functions, Objects & Advanced Types

// --- 1. Functions with typed parameters and return types ---
function add(a: number, b: number): number {
  return a + b;
}
console.log("add(3, 5):", add(3, 5));

// --- 2. Optional parameters ---
function greet(name: string, greeting?: string): string {
  return `${greeting ?? "Hello"}, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));

// --- 3. Default parameters ---
function createEmail(local: string, domain: string = "example.com"): string {
  return `${local}@${domain}`;
}
console.log(createEmail("user"));
console.log(createEmail("admin", "mycompany.org"));

// --- 4. Rest parameters ---
function sumAll(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log("sumAll(1,2,3,4):", sumAll(1, 2, 3, 4));

// --- 5. Function type expressions ---
type MathOp = (x: number, y: number) => number;
const multiply: MathOp = (a, b) => a * b;
console.log("multiply(4, 7):", multiply(4, 7));

// --- 6. Object types & type aliases ---
type Person = {
  name: string;
  age: number;
  email?: string;
};

function describePerson(p: Person): string {
  return `${p.name} is ${p.age} years old${p.email ? ` (${p.email})` : ""}`;
}
const alice: Person = { name: "Alice", age: 30, email: "alice@test.com" };
console.log(describePerson(alice));

// --- 7. Union types ---
function formatId(id: string | number): string {
  return `ID: ${id}`;
}
console.log(formatId(42));
console.log(formatId("ABC-123"));

// --- 8. Intersection types ---
type HasName = { name: string };
type HasAge = { age: number };
type Person2 = HasName & HasAge;
const bob: Person2 = { name: "Bob", age: 25 };
console.log(`${bob.name} is ${bob.age} years old`);

// --- 9. Literal types ---
type Direction = "up" | "down" | "left" | "right";
function move(direction: Direction): string {
  return `Moving ${direction}`;
}
console.log(move("up"));
