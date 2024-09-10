// Define the original array of numbers

const originalNumbers = [2, 5, 8, 10, 3];

// Use forEach to iterate through each number and double its value
originalNumbers.forEach((value, index, array) => {
    array[index] = value * 2;
});

// Print the modified array
console.log(originalNumbers);
