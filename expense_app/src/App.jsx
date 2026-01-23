import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { 
  addExpense, 
  removeExpense, 
  setBudget, 
  selectTotalSpent, 
  selectRemainingBudget, 
  selectExpenses,
  selectTotalBudget
} from './Store/expenseSlice';
import './App.css';



function App() {
  const dispatch = useDispatch();
  const expenses = useSelector(selectExpenses);
  const totalSpent = useSelector(selectTotalSpent);
  const remainingBudget = useSelector(selectRemainingBudget);
  const totalBudget = useSelector(selectTotalBudget);

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [newBudget, setNewBudget] = useState('');
  const categories = ["Food", "Transport", "Entertainment", "Others"]

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (description && amount) {
      dispatch(addExpense(description, amount, category));
      setDescription('');
      setAmount('');
    }
  };

  const handleSetBudget = (e) => {
    e.preventDefault();
    if (newBudget) {
      dispatch(setBudget(newBudget));
      setNewBudget('');
    }
  };

 return (
     
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Expense Tracker</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-500 uppercase">Total Budget</p>
            <p className="text-2xl font-bold text-blue-600">₦ {totalBudget.toFixed(2)}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-500 uppercase">Total Spent</p>
            <p className="text-2xl font-bold text-red-600">₦ {totalSpent.toFixed(2)}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-500 uppercase">Remaining</p>
            <p className={`text-2xl font-bold ₦{remainingBudget < 0 ? 'text-red-500' : 'text-green-600'}`}>
              ₦ {remainingBudget.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Forms Section */}
          <div className="space-y-6">
            <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Add New Expense</h2>
              <form onSubmit={handleAddExpense} className="space-y-4">
                <input
                  type="text"
                  placeholder="Description"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <input
                  type="number"
                  placeholder="Amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Add Expense
                </button>
              </form>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Update Budget</h2>
              <form onSubmit={handleSetBudget} className="flex gap-2">
                <input
                  type="number"
                  placeholder="New Budget"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={newBudget}
                  onChange={(e) => setNewBudget(e.target.value)}
                  required
                />
                <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-900 transition">
                  Set
                </button>
              </form>
            </section>
          </div>

         l
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold mb-4">Expenses List</h2>
            <ul className="space-y-3">
              {expenses.length === 0 && <p className="text-gray-400 italic">No expenses yet...</p>}
              {expenses.map((expense) => (
                <li key={expense.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100 group">
                  <div>
                    <p className="font-semibold text-gray-800">{expense.description}</p>
                    <p className="text-xs text-gray-500 capitalize">{expense.category}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-gray-700">₦{expense.amount.toFixed(2)}</span>
                    <button 
                      onClick={() => dispatch(removeExpense(expense.id))}
                      className="text-red-400 hover:text-red-600 font-bold text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App
