function isValidCardNumber(cardNumber) {
    // Basic validation for card number: must be a non-empty string of digits
    return typeof cardNumber === 'string' && /^\d{13,19}$/.test(cardNumber);
  }
  
  function isCardExpired(expirationDate) {
    // Check if the expiration date is in the past
    const [month, year] = expirationDate.split('/').map(Number);
    const now = new Date();
    const expiration = new Date(year, month - 1);
    
    return now > expiration;
  }
  
  function processPayment(amount, cardNumber, expirationDate) {
    // Check if amount is a positive number
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error("Invalid payment amount.");
    }
  
    // Check if card number is provided and valid
    if (!cardNumber || !isValidCardNumber(cardNumber)) {
      throw new Error("Invalid card number.");
    }
  
    // Check if expiration date is provided and not expired
    if (!expirationDate || isCardExpired(expirationDate)) {
      throw new Error("Invalid expiration date.");
    }
  
    console.log("Payment processed successfully.");
  }
  
  // Example usage:
  try {
    processPayment(100, "1234567812345678", "12/2025"); // This will succeed
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    processPayment(-50, "1234567812345678", "12/2025"); // This will throw an error for invalid amount
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    processPayment(100, "invalid_card", "12/2025"); // This will throw an error for invalid card number
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    processPayment(100, "1234567812345678", "12/2020"); // This will throw an error for expired card
  } catch (error) {
    console.error(error.message);
  }
  