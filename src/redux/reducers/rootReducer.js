import { combineReducers } from "redux";
import { BurgerReducer } from "./BurgerReducer";
import { VeXemPhimReducer } from "./VeXemPhimReducer";

export const rootReducer = combineReducers({
  BurgerReducer,
  VeXemPhimReducer,
});
