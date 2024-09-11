function login(username, password) {
    // Check if username is provided
    if (!username) {
      throw new Error("Username is required.");
    }
  
    // Check if password is provided
    if (!password) {
      throw new Error("Password is required.");
    }
  
    // Simulate valid credentials for demonstration purposes
    const validCredentials = {
      username: "user",
      password: "pass"
    };
  
    // Check if provided credentials match the valid credentials
    if (username !== validCredentials.username || password !== validCredentials.password) {
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
  
  try {
    login("", "pass"); // This will throw an error for missing username
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    login("user", "pass"); // This will succeed
  } catch (error) {
    console.error(error.message);
  }
  