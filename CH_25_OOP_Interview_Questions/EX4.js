// EX4.js — OOP Interview Questions: Getters, Setters, Symbol, WeakMap

// Q1: Computed properties with Symbols
const _id = Symbol("id");
class Employee {
  constructor(name, id) {
    this.name = name;
    this[_id] = id;
  }
  getId() {
    return this[_id];
  }
}
const emp = new Employee("Alice", 101);
console.log("Q1 - Symbol private:", emp.getId());
console.log("Q1 - Keys:", Object.keys(emp));

// Q2: WeakMap for true privacy
const _salary = new WeakMap();
class Worker {
  constructor(name, salary) {
    this.name = name;
    _salary.set(this, salary);
  }
  getSalary() {
    return _salary.get(this);
  }
}
const w = new Worker("Bob", 50000);
console.log("Q2 - WeakMap salary:", w.getSalary());
console.log("Q2 - No leak:", Object.keys(w));

// Q3: Property descriptors
const obj = {};
Object.defineProperty(obj, "secret", {
  value: "hidden",
  writable: false,
  enumerable: false,
  configurable: false
});
console.log("Q3 - Descriptor:", obj.secret);
console.log("Q3 - Enumerable?", Object.keys(obj));

// Q4: Multiple constructors via static factory
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  static fromSquare(side) {
    return new Rectangle(side, side);
  }
  area() {
    return this.width * this.height;
  }
}
const rect = new Rectangle(4, 5);
const square = Rectangle.fromSquare(4);
console.log("Q4 - Factory:", rect.area(), square.area());
