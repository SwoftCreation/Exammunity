import { combineReducers } from "redux";
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
  articleReducer,
});

export default rootReducer;
