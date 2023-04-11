const INITIAL_STATE = {
  expenses: [],
  total: 0,
};

const addExpensereducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, [...action.expense]],
        total: state.total + parseFloat(action.expense[1]),
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses.filter((e) => e !== action.array)],
        total: state.total - parseFloat(action.array[1]),
      };
    default:
      return state;
  }
};

export default addExpensereducer;
