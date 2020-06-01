import { createSelector } from 'reselect';

export const getCars = (state) => state.getAllCarsReducer.allCars;