// Function to filter expenses by "Groceries" category
function filterGroceries(expenses) {
    return expenses.filter(expense => expense.category === 'Groceries');
}


const expenses = [
    { amount: 100, category: 'Utilities' },
    { amount: 200, category: 'Groceries' },
    { amount: 50, category: 'Entertainment' },
    { amount: 75, category: 'Groceries' }
];

const groceryExpenses = filterGroceries(expenses);
console.log(groceryExpenses);
