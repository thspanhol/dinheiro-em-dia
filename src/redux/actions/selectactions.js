export const login = (state) => ({
  type: "LOGIN_DONE",
  name: state.name,
  income: state.income,
});

export const addExpense = ({ expense, value }) => ({
  type: "ADD_EXPENSE",
  expense: [expense, value],
});

export const deleteExpense = (array) => ({
  type: "DELETE_EXPENSE",
  array: array,
});
