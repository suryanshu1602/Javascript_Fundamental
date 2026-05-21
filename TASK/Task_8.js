//Question 4 — Build Health Reporter

//Problem: Given the percentage of test cases passed in a CI build, report build health.


// --- TEST CASE 1 ---
let percentage1 = 95;

let health1 = (percentage1 === 100) ? "🟢 Green Build"
            : (percentage1 >= 90 && percentage1 <= 99) ? "🟡 Stable — Investigate failures"
            : (percentage1 >= 70 && percentage1 <= 89) ? "🟠 Unstable"
            : "🔴 Broken Build — Block deployment";

console.log("Input: " + percentage1);
console.log("Output: " + health1);


console.log(""); // Prints an empty line for clean spacing


// --- TEST CASE 2 ---
let percentage2 = 65;

let health2 = (percentage2 === 100) ? "🟢 Green Build"
            : (percentage2 >= 90 && percentage2 <= 99) ? "🟡 Stable — Investigate failures"
            : (percentage2 >= 70 && percentage2 <= 89) ? "🟠 Unstable"
            : "🔴 Broken Build — Block deployment";

console.log("Input: " + percentage2);
console.log("Output: " + health2);