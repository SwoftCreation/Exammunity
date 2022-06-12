import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import marketReducer from "./marketReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  articleReducer,
  marketReducer,
  userReducer,
});

export default rootReducer;
