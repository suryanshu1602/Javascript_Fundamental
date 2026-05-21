//Question 3 — Bug Severity Classifier

//Problem: Given a bug's impact score (1–10), classify the severity.


// --- TEST CASE 1 ---
let score1 = 9;

let result1 = (score1 >= 9 && score1 <= 10) ? "Severity: Critical — Block release"
            : (score1 >= 7 && score1 <= 8)  ? "Severity: High"
            : (score1 >= 4 && score1 <= 6)  ? "Severity: Medium"
            : (score1 >= 1 && score1 <= 3)  ? "Severity: Low"
            : "Invalid score";

console.log("Input: " + score1);
console.log("Output: " + result1);


console.log(""); // This just prints an empty line for clean spacing


// --- TEST CASE 2 ---
let score2 = 5;

let result2 = (score2 >= 9 && score2 <= 10) ? "Severity: Critical — Block release"
            : (score2 >= 7 && score2 <= 8)  ? "Severity: High"
            : (score2 >= 4 && score2 <= 6)  ? "Severity: Medium"
            : (score2 >= 1 && score2 <= 3)  ? "Severity: Low"
            : "Invalid score";

console.log("Input: " + score2);
console.log("Output: " + result2);