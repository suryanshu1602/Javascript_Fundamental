//Question 3 — Leap Year Check

//Problem: Take a year and check if it's a leap year.

//Rules:

//Divisible by 4 AND not divisible by 100 → Leap year
//OR divisible by 400 → Leap year

//Else → Not a leap year

let year = 2026; // The current year!

let result = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) 
             ? "Leap Year" 
             : "Not a Leap Year";

console.log(year + " is a " + result); // Output: 2026 is a Not a Leap Year