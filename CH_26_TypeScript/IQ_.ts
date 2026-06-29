// IQ_.ts — More TypeScript Interview Questions

// Q1: What is type assertion?
let someValue: unknown = "Hello TypeScript";
let strLength: number = (someValue as string).length;
console.log("Q1 - Type assertion length:", strLength);

// Q2: What is `never` type?
function throwError(msg: string): never {
  throw new Error(msg);
}
function infiniteLoop(): never {
  while (true) {}
}
console.log("Q2 - never: function that never returns");

// Q3: What is `satisfies`?
type RGB = [number, number, number];
const palette = {
  red: [255, 0, 0],
  green: [0, 255, 0],
  blue: [0, 0, 255],
} satisfies Record<string, RGB | string>;
console.log("Q3 - satisfies:", palette.red);

// Q4: What are template literal types?
type EventName = `on${"Click" | "Hover" | "Focus"}`;
let clickEvent: EventName = "onClick";
let hoverEvent: EventName = "onHover";
console.log("Q4 - Template literal types:", clickEvent, hoverEvent);

// Q5: What is `typeof` type operator?
const person = { name: "Alice", age: 30 };
type PersonType = typeof person;
let anotherPerson: PersonType = { name: "Bob", age: 25 };
console.log("Q5 - typeof operator:", anotherPerson);

// Q6: What is `ReturnType<T>`?
function greet(): string {
  return "Hello";
}
type GreetReturn = ReturnType<typeof greet>;
let msg: GreetReturn = "Hi there";
console.log("Q6 - ReturnType:", msg);
