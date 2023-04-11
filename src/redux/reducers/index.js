import { combineReducers } from "redux";
import loginreducer from "./selectcolorreducer";
import addExpensereducer from "./userreducer";

const rootReducer = combineReducers({
  loginreducer,
  addExpensereducer,
});

export default rootReducer;
