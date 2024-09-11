function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully.");
        }, 2000); // 2 second delay
    });
}

// Example usage:
getData().then((message) => {
    console.log(message); // Output: Data fetched successfully (after 2 seconds)
});
