import axios from 'axios';

import actionTypes from '../../constants/actionTypes';

import { API_URL } from '../../config';


export const getAllCars = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_ALL_CARS,
    payload: axios({
      method: 'GET',
      url: `${API_URL}/cars`
    })
  })
};
