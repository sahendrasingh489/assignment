
function createCart() {
    // Private cartItems array
    let cartItems = [];

    // Function to get the current cart items
    function getCartItems() {
        return cartItems;
    }

    // Function to add items to the cart
    function addToCart(product) {
        const { productId, name, quantity, price } = product;

        // Check if the item already exists in the cart
        const existingItem = cartItems.find(item => item.productId === productId);

        if (existingItem) {
            // If item exists, update the quantity
            existingItem.quantity += quantity;
        } else {
            // If item does not exist, add a new item
            cartItems.push({ productId, name, quantity, price });
        }
    }

    // Return an object with access to getCartItems and addToCart functions
    return {
        getCartItems,
        addToCart
    };
}

// Create a new cart
const cart = createCart();

// Adding items to the cart
cart.addToCart({ productId: 1, name: 'Laptop', quantity: 1, price: 1000 });
cart.addToCart({ productId: 2, name: 'Mouse', quantity: 2, price: 50 });
cart.addToCart({ productId: 1, name: 'Laptop', quantity: 1, price: 1000 }); // This will increment quantity of Laptop

// Example usage
console.log(cart.getCartItems());

