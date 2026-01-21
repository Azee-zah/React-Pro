import {create} from "zustand";

const useExpenseStore = create((set, get) => ({
    // the state 
    expenses: [],
    totalBudget:  0,

    // the actions
    addExpense: (expense) => set((state) => ({
     expenses: [...state.expenses, 
        {
            id: crypto.randomUUID(),
            description: expense.description,
            amount: Number(expense.amount),
            category: expense.category,
            date: new Date().toISOString(),
        }
    ]
    })),

    removeExpense: (id) => set((state) => ({
        expenses: state.expenses.filter((expense) => expense.id !== id)
    })),

    setBudget:(amount) => set((state) => ({
        totalBudget: Number(amount)
    })),

    getTotalSpent: () => get().expenses.reduce((total, expense) => total + expense.amount, 0),

    getRemainingBudget: () => get().totalBudget - get().getTotalSpent(),
}))

export default useExpenseStore;