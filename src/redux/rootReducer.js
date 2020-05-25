import { combineReducers } from "redux";

import getAllCarsReducer from '../redux/allCars/allCarsReducer';

const rootReducer = combineReducers({
  getAllCarsReducer
});

export default rootReducer;
