// File: calculator.js

const process = require('process');

// Extract command-line arguments
const [operation, num1, num2] = process.argv.slice(2);

// Validate input
if (!operation || isNaN(num1) || isNaN(num2)) {
    console.error('Usage: node calculator.js <operation> <num1> <num2>');
    console.error('Available operations: add, subtract, multiply, divide');
    process.exit(1);
}

// Convert input numbers to floats
const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

// Perform the operation based on user input
let result;
switch (operation.toLowerCase()) {
    case 'add':
        result = number1 + number2;
        break;
    case 'subtract':
        result = number1 - number2;
        break;
    case 'multiply':
        result = number1 * number2;
        break;
    case 'divide':
        if (number2 === 0) {
            console.error('Error: Division by zero is not allowed.');
            process.exit(1);
        }
        result = number1 / number2;
        break;
    default:
        console.error('Invalid operation. Available operations: add, subtract, multiply, divide');
        process.exit(1);
}

// Output the result
console.log(`Result: ${result}`);

