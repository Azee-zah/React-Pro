import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  expenses: [],
  totalBudget: 0,
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: {
      reducer(state, action) {
        state.expenses.push(action.payload);
      },
      prepare(description, amount, category) {
        return {
          payload: {
            id: nanoid(),
            description,
            amount: Number(amount),
            category,
            date: new Date().toISOString(),
          },
        };
      },
    },
    removeExpense(state, action) {
      state.expenses = state.expenses.filter(exp => exp.id !== action.payload);
    },
    setBudget(state, action) {
      state.totalBudget = action.payload;
    },
  },
});


const selectExpenses= (state) => state.expenses;

export const selectTotalSpent = (state) => 
  selectExpenses(state).expenses.reduce((total, item) => total + item.amount, 0);

export const selectRemainingBudget = (state) => {
  const totalSpent = selectTotalSpent(state);
  return selectExpenses(state).totalBudget - totalSpent;
};

export const { addExpense, removeExpense, setBudget } = expenseSlice.actions;
export default expenseSlice.reducer;





