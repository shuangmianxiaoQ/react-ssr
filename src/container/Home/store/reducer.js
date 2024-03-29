import { CHANGE_USER_INFO } from './constants';

const defaultState = {
  userInfo: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      };
    default:
      return state;
  }
};
