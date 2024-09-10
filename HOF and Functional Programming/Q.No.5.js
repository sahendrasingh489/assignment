// Function to calculate the total amount of all expenses
function calculateTotalExpenses(expenses) {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

// Example usage
const expenses = [
    { amount: 100, category: 'Utilities' },
    { amount: 200, category: 'Groceries' },
    { amount: 50, category: 'Entertainment' },
    { amount: 75, category: 'Groceries' }
];

const totalExpenses = calculateTotalExpenses(expenses);
console.log(`Total Expenses: $${totalExpenses}`);
