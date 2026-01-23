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
      state.totalBudget = Number(action.payload);
    },
  },
});



const selectBudgetState = (state) => state.expenses;

// 2. Get the Budget
export const selectTotalBudget = (state) => selectBudgetState(state).totalBudget;

// 3. Get the List
export const selectExpenses = (state) => selectBudgetState(state).expenses;

// 4. Calculate Spent
export const selectTotalSpent = (state) => 
  selectExpenses(state).reduce((total, item) => total + item.amount, 0);

// 5. Calculate Remaining
export const selectRemainingBudget = (state) => {
  return selectTotalBudget(state) - selectTotalSpent(state);
};


export const { addExpense, removeExpense, setBudget } = expenseSlice.actions;
export default expenseSlice.reducer;





