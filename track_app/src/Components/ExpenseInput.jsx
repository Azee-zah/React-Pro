import { useState } from "react";
import useExpenseStore from "../Store/expenseStore";

const ExpenseInput = () => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Other");
    const categories = ["Entertainment", "Food", "Transport", "Shopping", "Other"];
    const addExpense = useExpenseStore((state) => state.addExpense);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        addExpense({ description, amount, category });
        setDescription("");
        setAmount("");
        setCategory("");
    };

    return (
        <form 
  onSubmit={handleSubmit} 
  className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md max-w-md mx-auto border border-slate-200"
>
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-slate-700">Description</label>
    <input 
      type="text" 
      value={description} 
      onChange={(e) => setDescription(e.target.value)} 
      placeholder="Enter your description here!" 
      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all"
    />
  </div>

  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-slate-700">Amount</label>
    <input 
      type="number" 
      value={amount} 
      onChange={(e) => setAmount(e.target.value)} 
      placeholder="0.00" 
      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all"
    />
  </div>

  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-slate-700">Category</label>
    <select 
      value={category} 
      onChange={(e) => setCategory(e.target.value)}
      className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all cursor-pointer"
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>

  <button 
    type="submit" 
    className="mt-2 w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transform transition-transform active:scale-95"
  >
    Add Expense
  </button>
</form>

    )
};


export default ExpenseInput;