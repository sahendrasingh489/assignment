// Function to calculate the sum of numbers from 1 to n

const prompt = require('prompt-sync')();

function calculateSum(n) {
    if (n <= 0) {
        console.log("Please enter a positive integer.");
        return;
    }

    let sum = 0;
    let i = 1;

    do {
        sum += i;
        i++;
    } while (i <= n);

    console.log("The sum of numbers from 1 to " + n + " is " + sum);
}

// Example usage
const number = parseInt(prompt("Enter a positive integer:"));
calculateSum(number);
