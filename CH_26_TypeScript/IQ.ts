// IQ.ts — TypeScript Interview Questions

// Q1: What is the difference between `any` and `unknown`?
let valueAny: any = "hello";
valueAny = 42;
// valueAny.toUpperCase();  // No error at compile time, but would crash at runtime
console.log("Q1 - any lets you do anything (no checks)");

let valueUnknown: unknown = "hello";
valueUnknown = 42;
// valueUnknown.toUpperCase();  // Error: Object is of type 'unknown'
if (typeof valueUnknown === "string") {
  console.log("Q1 - unknown needs type check:", valueUnknown.toUpperCase());
}

// Q2: What is a tuple?
let tuple: [string, number] = ["Alice", 30];
console.log("Q2 - Tuple:", tuple[0], tuple[1]);

// Q3: What is the `readonly` modifier?
type User = {
  readonly id: number;
  name: string;
};
let user: User = { id: 1, name: "Alice" };
// user.id = 2;  // Error: Cannot assign to 'id' because it is a read-only property
user.name = "Bob";
console.log("Q3 - readonly id:", user.id, "name:", user.name);

// Q4: What is the difference between `interface` and `type`?
interface Animal {
  name: string;
}
interface Bear extends Animal {
  honey: boolean;
}
type AnimalType = { name: string };
type BearType = AnimalType & { honey: boolean };
let bear: Bear = { name: "Winnie", honey: true };
console.log("Q4 - Interface (extends):", bear.name, bear.honey);

// Q5: What are generics?
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
console.log("Q5 - Generics:", firstElement([1, 2, 3]), firstElement(["a", "b"]));

// Q6: What is `keyof`?
type Point = { x: number; y: number };
type P = keyof Point;  // "x" | "y"
let key: P = "x";
console.log("Q6 - keyof:", key);

// Q7: What are utility types?
type PartialUser = Partial<User>;
let partial: PartialUser = { name: "Charlie" };
console.log("Q7 - Partial:", partial);

// Q8: What are mapped types?
type Readonly2<T> = { readonly [K in keyof T]: T[K] };
type ReadonlyUser = Readonly2<User>;
let roUser: ReadonlyUser = { id: 2, name: "Dave" };
// roUser.name = "Eve";  // Error
console.log("Q8 - Mapped type (Readonly):", roUser);
