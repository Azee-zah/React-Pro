import { useState } from "react";
import useExpenseStore from "../Store/expenseStore";

const ExpenseInput = () => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Other");
    const categories = ["Entertainment", "Food", "Travel", "Shopping", "Other"];
    const addExpense = useExpenseStore((state) => state.addExpense);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        addExpense({ description, amount, category });
        setDescription("");
        setAmount("");
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter your description here!" />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter the amount here!" />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseInput;