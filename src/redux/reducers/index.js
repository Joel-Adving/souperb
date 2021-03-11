import addressReducer from "./address";
import cartReducer from "./cart";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  address: addressReducer,
  cart: cartReducer,
});

export default allReducers;
