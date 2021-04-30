import { combineReducers } from "redux";

import activeCity from "./activeCity";
import inputData from "./inputData";
import weather from "./weather";

const rootReducer = combineReducers({
  activeCity,
  inputData,
  weather,
});

export default rootReducer;
