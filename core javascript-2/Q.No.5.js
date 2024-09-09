// Step 1: Initialize a Set with unique numbers
const uniqueNumbers = new Set([1, 2, 3, 4, 5, 3, 2, 6]);

// Step 2: Create a Map to store the number and its square
const squaresMap = new Map();

// Step 3: Iterate through the Set and populate the Map with squares
uniqueNumbers.forEach(number => {
    squaresMap.set(number, number * number);
});

// Step 4: Print the unique numbers and their corresponding squares
console.log("Unique numbers and their squares:");
squaresMap.forEach((square, number) => {
    console.log(`Number: ${number}, Square: ${square}`);
});
