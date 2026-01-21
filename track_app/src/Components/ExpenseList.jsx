import useExpenseStore from "../Store/expenseStore";

const ExpenseList = () => {
    const expenses = useExpenseStore((state) => state.expenses);
    const removeExpense = useExpenseStore((state) => state.removeExpense);

    return (
        <div>
            {expenses.map((expense) => (
                <div key={expense.id}>
                    <p>{expense.description}</p>
                    <p>{expense.amount}</p>
                    <p>{expense.category}</p>
                    <button onClick={() => removeExpense(expense.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default ExpenseList;