import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const middlewares = [
  logger
];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
); 

export default store;