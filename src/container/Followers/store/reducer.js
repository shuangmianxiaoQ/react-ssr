import { CHANGE_LIST } from './constants';

const defaultState = {
  list: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
};
