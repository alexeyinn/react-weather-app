import { combineReducers } from "redux";

import activeCity from "./activeCity";
import inputData from "./inputData";

const rootReducer = combineReducers({
  activeCity,
  inputData,
});

export default rootReducer;
