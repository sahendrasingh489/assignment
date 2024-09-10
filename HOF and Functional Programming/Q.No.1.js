// Function to calculate the total price of items in the order

function calculateTotalPrice(orderItems) {
    let totalPrice = 0;
    
    // Iterate through each item in the array
    orderItems.forEach(item => {
        totalPrice += item.price;
    });

    return totalPrice;
}

// Example usage
const items = [
    { name: 'Laptop', price: 120000 },
    { name: 'Mobile', price: 70000 },
    { name: 'Mobile Charger', price: 1500 },
    { name: 'Laptop Charger', price: 10500 }
];

const totalOrderPrice = calculateTotalPrice(items);
console.log(`Total Price: $${totalOrderPrice}`);  // Output: Total Price: $120
