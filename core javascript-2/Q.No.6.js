// Step 1: Create displayInfo function
function displayInfo(name, role) {
    console.log(`${name} is working as a ${role}.`);
}

// Step 2: Use call to invoke displayInfo with specific arguments
displayInfo.call(null, 'Alice', 'Developer');

// Step 3: Use apply to invoke displayInfo with arguments passed as an array
displayInfo.apply(null, ['Bob', 'Designer']);

// Step 4: Create greet function that uses 'this' context
function greet() {
    console.log(`Hello, ${this.name}!`);
}

// Step 5: Use bind to create boundGreet with a specific context
const person = { name: 'Charlie' };
const boundGreet = greet.bind(person);

// Step 6: Invoke boundGreet
boundGreet();
