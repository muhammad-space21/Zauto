import { combineReducers } from "redux";

import getAllCarsReducer from '../redux/allCars/allCarsReducer';

// Configure RootReducer
const rootReducer = combineReducers({
  getAllCarsReducer
});

export default rootReducer;
