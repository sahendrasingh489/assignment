// Define the original array of numbers
const originalNumbers = [2, 5, 8, 10, 3];

// Create an empty array to store even numbers
const evenNumbers = [];

// Use forEach to iterate through each number and collect even numbers
originalNumbers.forEach((value) => {
    if (value % 2 === 0) {
        evenNumbers.push(value);
    }
});

// Print the array containing only the even numbers
console.log(evenNumbers);
