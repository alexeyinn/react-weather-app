import { combineReducers } from "redux";

import activeCity from "./activeCity";

const rootReducer = combineReducers({
  activeCity,
});

export default rootReducer;
