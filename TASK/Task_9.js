// --- TEST CASE 1: 2 Failed Attempts ---
let attempts1 = 2;

let result1 = (attempts1 >= 3) ? "🔒 Account Locked — Contact support"
            : (attempts1 === 0) ? "Login successful"
            : (3 - attempts1) + " attempt left before lockout";

console.log("Input: attempts = " + attempts1);
console.log("Output: " + result1);


console.log(""); // Clean spacing


// --- TEST CASE 2: 3 Failed Attempts ---
let attempts2 = 3;

let result2 = (attempts2 >= 3) ? "🔒 Account Locked — Contact support"
            : (attempts2 === 0) ? "Login successful"
            : (3 - attempts2) + " attempt left before lockout";

console.log("Input: attempts = " + attempts2);
console.log("Output: " + result2);


console.log(""); // Clean spacing


// --- TEST CASE 3: 0 Failed Attempts ---
let attempts3 = 0;

let result3 = (attempts3 >= 3) ? "🔒 Account Locked — Contact support"
            : (attempts3 === 0) ? "Login successful"
            : (3 - attempts3) + " attempt left before lockout";

console.log("Input: attempts = " + attempts3);
console.log("Output: " + result3);