// Define two person objects
const person1 = {
    name: 'Alice',
    age: 25
  };
  
  const person2 = {
    name: 'Bob',
    age: 30
  };
  
  // Define the introduce function
  function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
  
  // Using the call method to make person2 introduce itself using the introduce function
  introduce.call(person2);  // Output: "Hello, I'm Bob, and I'm 30 years old."
  