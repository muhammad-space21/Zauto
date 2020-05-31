import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducer from './rootReducer';

// Apply middlewares to store
const middlewares = [
  promiseMiddleware,
  logger,
  thunk
];

// Don't display logger in production mode
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
};

const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);

// Configure Store
const store = (initialState) => createStoreWithMiddlewares(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store();