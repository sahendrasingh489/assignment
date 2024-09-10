function createCart() {
    // Private cartItems array
    let cartItems = [];

    // Function to get the current cart items
    function getCartItems() {
        return cartItems;
    }

    // Return an object with access to the getCartItems function
    return {
        getCartItems
    };
}

// Create a new cart
const cart = createCart();

// Example usage
console.log(cart.getCartItems()); // Outputs: []
