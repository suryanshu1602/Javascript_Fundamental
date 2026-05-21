//### Question 2 — Student Grade Calculator
//**Problem:** Take marks (0–100) and print the grade based on these rules:

//- 90 and above → A
//- 80–89 → B
//- 70–79 → C
//- 60–69 → D
//- Below 60 → Fail


let marks = 85;

let grade= (marks >= 90) ? "A" :
           (marks >= 80) ? "B" :
           (marks >= 70) ? "C" :
           (marks >= 60) ? "D" : "Fail";

console.log(`Your grade is: ${grade}`);