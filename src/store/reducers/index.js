import { combineReducers } from "redux";

// 导入reducer
import CounterReducer from "./CounterReducer";
import TodoReducer from "./TodoReducer";

// 合并reducer
export default combineReducers({
  CounterReducer,
  TodoReducer
})