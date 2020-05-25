import axios from 'axios';

import actionTypes from '../../constants/actionTypes';

import { API_URL } from '../../config';


export const getAllCars = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_ALL_CARS,
    payload: axios({
      method: 'GET',
      url: `${API_URL}/cars`,
      headers: {
        Authorization: 'Bearer ' + token, //the token is a variable which holds the token
        'Content-type': 'application/json'
      }
    })
  })
};
