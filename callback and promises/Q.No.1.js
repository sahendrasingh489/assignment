function sumAsync(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 1000); // 1 second delay
}

// Example usage:
sumAsync(3, 5, (result) => {
    console.log("Sum:", result); // Output: Sum: 8 (after 1 second)
});
