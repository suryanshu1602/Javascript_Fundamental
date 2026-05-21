//Question 2 — Test Case Pass/Fail Verdict

//Problem: Compare actual result with expected result and print test verdict.


// Scenario: Test fails because the results don't match
let expected = "Login Successful";
let actual   = "Invalid Credentials";

// The ternary operator checks for an exact match
let verdict = (actual === expected) 
  ? "✅ Test Passed" 
  : `❌ Test Failed — Expected: ${expected}, Got: ${actual}`;

console.log(verdict); 
// Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials