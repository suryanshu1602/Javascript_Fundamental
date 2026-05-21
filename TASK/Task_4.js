let statusCode = 404;

let category = (statusCode >= 200 && statusCode <= 299) ? "Success"
             : (statusCode >= 300 && statusCode <= 399) ? "Redirection"
             : (statusCode >= 400 && statusCode <= 499) ? "Client Error"
             : (statusCode >= 500 && statusCode <= 599) ? "Server Error"
             : "Invalid Code";

console.log(category); // Output: Client Error