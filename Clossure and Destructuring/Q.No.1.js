// Counter function using closure

function createCounter() {
    let count = 0;  // This variable is enclosed in the closure

    return function() {
        count++;  // Increment the counter
        return count;  // Return the updated count
    };
}

// Create a new counter
const counter = createCounter();

// Usage example (incrementing counter with each button click)

document.getElementById("counterButton").addEventListener("click", function() {
    
    let newCount = counter();  // Call the closure to get the updated count
    
    document.getElementById("displayCount").textContent = newCount;  // Display the updated count
});
