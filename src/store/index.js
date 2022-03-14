import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import clientAxios from '../client/request';
import serverAxios from '../server/request';
import { homeReducer } from '../container/Home/store';
import { followersReducer } from '../container/Followers/store';

const reducer = combineReducers({
  home: homeReducer,
  followers: followersReducer
});

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
};

export const getClientStore = () => {
  // 客户端数据脱水
  const preloadedState = window.context.state;
  return createStore(reducer, preloadedState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};
