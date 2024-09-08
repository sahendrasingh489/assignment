// Function to determine weather condition based on temperature

const prompt = require('prompt-sync')();

function checkWeatherCondition(temperature) {
    // Use ternary operator to determine if the weather is "Hot" or "Moderate"
    return temperature > 30 ? "Hot" : "Moderate";
}

// Example usage: taking temperature input from the user
let tempInput = prompt("Enter the current temperature in °C:");

// Convert the input to a number
tempInput = parseFloat(tempInput);

// Check if the input is a valid number
if (!isNaN(tempInput)) {
    // Call the function to get the weather condition and display the result
    
    let weatherCondition = checkWeatherCondition(tempInput);
        console.log("The weather condition is: " + weatherCondition);
} else {
    console.log("Please enter a valid number for the temperature.");
}
