// program to show the login credential 


function login(username, password) {
    
    if (username === "admin" && password === "12345") {
        return "Login successful";
    } else {
        return "Invalid credentials";
    }
}

// Example usage:

let usernameInput = 'admin';
let passwordInput = '12345';

// Call the login function and show the result
let result = login(usernameInput, passwordInput);
console.log(result);
