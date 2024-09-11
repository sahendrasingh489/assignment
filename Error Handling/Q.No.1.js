function login(username, password) {
    if (!username) {
      throw new Error("Username is required.");
    }
    if (!password) {
      throw new Error("Password is required.");
    }
    
    // Simulate valid credentials for demonstration
    const validUsername = "user";
    const validPassword = "pass";
  
    if (username !== validUsername || password !== validPassword) {
      throw new Error("Invalid username or password.");
    }
  
    console.log("Login successful.");
  }
  
  // Example usage:
  try {
    login("user", "wrongpass"); // This will throw an error
  } catch (error) {
    console.error(error.message);
  }

  // TASK 1 :-
  

  let cart = [];

function addToCart(name, price, quantity) {
  if (!name) {
    throw new Error("Product name is required.");
  }
  if (typeof price !== 'number' || price <= 0) {
    throw new Error("Invalid product price.");
  }
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("Invalid quantity.");
  }

  cart.push({ name, price, quantity });
  console.log(`Added ${quantity} of ${name} to cart.`);
}

// Example usage:
try {
  addToCart("Laptop", 1200, 1); // This will succeed
  addToCart("", 1200, 1);       // This will throw an error
} catch (error) {
  console.error(error.message);
}
            

            //TASK 2 :-


function checkout() {
    if (cart.length === 0) {
      throw new Error("Cart is empty. Add items before checkout.");
    }
  
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`Checkout successful. Total amount: $${total}`);
  }
  
  // Example usage:
  try {
    checkout(); // This will throw an error if cart is empty
  } catch (error) {
    console.error(error.message);
  }
  
  // Add some items and then checkout
  try {
    addToCart("Laptop", 1200, 1); // Adding item to cart
    checkout();                   // This will succeed now
  } catch (error) {
    console.error(error.message);
  }
  