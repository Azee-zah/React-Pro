import useExpenseStore from "../Store/expenseStore";
import { useState } from "react";



const Header = () => {
    const budget = useExpenseStore((state) => state.totalBudget);
    const setBudget = useExpenseStore((state) => state.setBudget);
    const remaining = useExpenseStore((state) => state.getRemainingBudget);

    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (e) => {
        setNewBudget(e.target.value);
        
        
    };

    const handleBudgetSubmit = () => {
        setBudget(newBudget);
        setNewBudget(0);
    };

    return (
        <header className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-500 text-white shadow-lg rounded-b-xl mb-10">
  
  {/* Title and Budget Display Section */}
  <div className="text-center md:text-left mb-4 md:mb-0">
    <h1 className="text-3xl font-extrabold mb-1">
      NG-Expense Tracker
    </h1>
    <p className="text-lg opacity-90">
      Total Budget: <span className="font-bold">₦{Number(budget).toLocaleString()}</span>
    </p>
     <p className={`text-xl font-bold mt-1 ${remaining() < 0 ? 'text-red-300' : 'text-green-300'}`}>
          Remaining: ₦{Number(remaining()).toLocaleString()}
    </p>
  </div>

  {/* Budget Adjustment Section */}
  <div className="flex items-center gap-3">
    <input 
      type="number" 
      value={newBudget} 
      onChange={handleBudgetChange}
      placeholder="New Budget"
      className="px-3 py-2 bg-white text-slate-900 rounded-lg w-36 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150"
    />
    <button 
      onClick={handleBudgetSubmit}
      className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold shadow-md transition-colors transform active:scale-95"
    >
      Set Budget
    </button>
  </div>
</header>

    );
};

export default Header;