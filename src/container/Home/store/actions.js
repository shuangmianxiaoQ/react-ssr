import axios from 'axios';
import { CHANGE_LIST } from './constants';

const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  return dispatch =>
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      dispatch(changeList(res.data));
    });
};
