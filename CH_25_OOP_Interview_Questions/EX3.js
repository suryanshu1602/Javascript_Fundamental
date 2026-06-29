// EX3.js — OOP Interview Questions: Prototype, Mixins, Abstract

// Q1: Prototype inheritance
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hello, I'm ${this.name}`;
};
const p1 = new Person("Alice");
console.log("Q1 - Prototype:", p1.greet());

// Q2: Prototype chain
function Student(name, grade) {
  Person.call(this, name);
  this.grade = grade;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() {
  return `${this.name} studies in grade ${this.grade}`;
};
const s = new Student("Bob", 5);
console.log("Q2 - Chain:", s.greet(), "|", s.study());

// Q3: Mixin pattern
const LoggerMixin = {
  log(msg) {
    console.log(`[${this.name}] ${msg}`);
  }
};
class User {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(User.prototype, LoggerMixin);
const user = new User("Charlie");
console.log("Q3 - Mixin:");
user.log("logged in!");

// Q4: Abstract-like pattern (simulated)
class Database {
  constructor() {
    if (new.target === Database) {
      throw new Error("Cannot instantiate abstract class Database");
    }
  }
  connect() {
    throw new Error("connect() must be implemented");
  }
}
class MySQL extends Database {
  connect() {
    return "Connected to MySQL";
  }
}
// const db = new Database(); // Would throw error
const mysql = new MySQL();
console.log("Q4 - Abstract:", mysql.connect());

// Q5: Object.freeze for immutability
const config = Object.freeze({ MAX_USERS: 100, TIMEOUT: 5000 });
// config.MAX_USERS = 200; // Fails silently in strict mode
console.log("Q5 - Frozen:", config.MAX_USERS, Object.isFrozen(config));
