// Step 1: Create calculator object with add, subtract, and multiply methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    
    // Step 2: Implement calculate method
    calculate: function(operation, a, b) {
        return this[operation](a, b);
    }
};

// Step 3: Use call to perform an addition operation
const additionResult = calculator.calculate.call(calculator, 'add', 5, 3);
console.log(`Addition Result: ${additionResult}`);

// Step 4: Use apply to perform a multiplication operation with arguments passed as an array
const multiplicationResult = calculator.calculate.apply(calculator, ['multiply', 4, 7]);
console.log(`Multiplication Result: ${multiplicationResult}`);

// Step 5: Create discountCalculator object with a discount percentage and applyDiscount method
const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function(price) {
        const discount = (this.discountPercentage / 100) * price;
        return price - discount;
    }
};

// Step 6: Use bind to create a new function calculateDiscount bound to discountCalculator
const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

// Step 7: Invoke the calculateDiscount function
const discountedPrice = calculateDiscount(200);
console.log(`Discounted Price: ${discountedPrice}`);
