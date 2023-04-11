const INITIAL_STATE = {
  name: "",
  income: 0,
};

const loginreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_DONE":
      return {
        name: action.name,
        income: action.income,
      };
    default:
      return state;
  }
};

export default loginreducer;
