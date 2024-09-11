function multiplyWithCallback(arr, callback) {
    const result = arr.map(num => num * 2); // Multiply each element by 2
    callback(result); // Pass the result to the callback function
}

// Example usage:
multiplyWithCallback([1, 2, 3, 4], (result) => {
    console.log("Result:", result); // Output: [2, 4, 6, 8]
});
