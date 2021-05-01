import { combineReducers } from "redux";

import cities from "./cities";
import inputData from "./inputData";
import weather from "./weather";

const rootReducer = combineReducers({
  cities,
  inputData,
  weather,
});

export default rootReducer;
