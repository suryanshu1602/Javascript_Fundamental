let score = 9;

let severity = (score >= 9 && score <= 10) ? "Severity: Critical — Block release"
             : (score >= 7 && score <= 8)  ? "Severity: High"
             : (score >= 4 && score <= 6)  ? "Severity: Medium"
             : (score >= 1 && score <= 3)  ? "Severity: Low"
             : "Invalid score";

console.log(severity); 
// Output: Severity: Critical — Block release