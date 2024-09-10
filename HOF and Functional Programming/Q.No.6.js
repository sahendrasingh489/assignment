// Define the function to categorize expenses based on amount
function categorizeExpense(amount) {
    return amount > 100 ? "High Expense" : "Low Expense";
}

// Example list of expenses (with amount and category)
const expenses = [
    { amount: 100, category: 'Utilities' },
    { amount: 200, category: 'Groceries' },
    { amount: 50, category: 'Entertainment'}
];

// Use map to categorize each expense based on the amount
const categorizedExpenses = expenses.map(expense => categorizeExpense(expense.amount));

// Print the result
console.log(categorizedExpenses);
