import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from '../container/Home/store';

const reducer = combineReducers({
  home: homeReducer
});

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

export const getClientStore = () => {
  // 客户端数据脱水
  const preloadedState = window.context.state;
  return createStore(reducer, preloadedState, applyMiddleware(thunk));
};
