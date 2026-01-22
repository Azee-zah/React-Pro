import useExpenseStore from "../Store/expenseStore";

const ExpenseList = () => {
    const expenses = useExpenseStore((state) => state.expenses);
    const removeExpense = useExpenseStore((state) => state.removeExpense);

    return (
        <div className="mt-8 space-y-4 max-w-md mx-auto">
  <h2 className="text-xl font-bold text-slate-800 mb-4">Transaction History</h2>
  
  {expenses.map((expense) => (
    <div 
      key={expense.id} 
      className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
          {expense.category}
        </span>
        <p className="text-lg font-medium text-slate-900 leading-tight">
          {expense.description}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-lg font-bold text-slate-900">
          ₦{Number(expense.amount).toLocaleString()}
        </p>
        <button 
          onClick={() => removeExpense(expense.id)}
          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors group"
          aria-label="Remove expense"
        >
          <svg xmlns="http://www.w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  ))}
  
  {expenses.length === 0 && (
    <p className="text-center text-slate-500 py-8 italic">No expenses recorded yet.</p>
  )}
</div>

    );
};

export default ExpenseList;