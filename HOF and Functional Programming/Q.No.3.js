// Function to add calculated tax to each expense
function addTaxToExpenses(expenses) {
    const taxRate = 0.10; // 10% tax

    return expenses.map(expense => {
        const taxAmount = expense.amount * taxRate;
        return {
            ...expense,
            tax: taxAmount
        };
    });
}

// Example usage
const expenses = [
    { amount: 100, category: 'Utilities' },
    { amount: 200, category: 'Groceries' },
    { amount: 50, category: 'Entertainment' }
];

const expensesWithTax = addTaxToExpenses(expenses);
console.log(expensesWithTax);
