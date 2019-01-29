import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const defaultState = { name: 'sisily' };
const reducer = (state = defaultState, action) => state;
const getStore = () => createStore(reducer, applyMiddleware(thunk));

export default getStore;
