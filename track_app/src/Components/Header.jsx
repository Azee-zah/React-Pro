import useExpenseStore from "../Store/expenseStore";
import { useState } from "react";



const Header = () => {
    const budget = useExpenseStore((state) => state.totalBudget);
    const setBudget = useExpenseStore((state) => state.setBudget);

    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (e) => {
        setNewBudget(e.target.value);
    };

    const handleBudgetSubmit = () => {
        setBudget(newBudget);
    };

    return (
        <header>
            <h1>Expense Tracker</h1>
            <p>Total Budget: {budget}</p>
            <input type="number" value={newBudget} onChange={handleBudgetChange} />
            <button onClick={handleBudgetSubmit}>Set Budget</button>
        </header>
    );
};

export default Header;