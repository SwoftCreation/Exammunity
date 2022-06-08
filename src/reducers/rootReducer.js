import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import marketReducer from "./marketReducer";
const rootReducer = combineReducers({
  articleReducer,
  marketReducer,
});

export default rootReducer;
