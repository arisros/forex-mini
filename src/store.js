import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers';

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(thunk);
  } else {
    return applyMiddleware(thunk, createLogger())
  }
};

export const store = createStore(
  rootReducer, composeWithDevTools(getMiddleware()));
