import actionTypes from "../../constants/actionTypes";

const defaultState = {
  loading: false,
  error: false,
  allCars: null
};

const map = {
  [`${actionTypes.GET_ALL_CARS}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true,
  }),
  [`${actionTypes.GET_ALL_CARS}${actionTypes.FULLFILLED}`]: ( state, { payload }) => ({
    ...state,
    loading: false,
    allCars: payload.data,
  }),
  [`${actionTypes.GET_ALL_CARS}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  })
};

export default function getAllCarsReducer(state=defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
};
