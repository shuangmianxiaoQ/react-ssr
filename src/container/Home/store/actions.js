import { CHANGE_LIST } from './constants';

const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) =>
    axiosInstance.get('/users/shuangmianxiaoQ/followers').then(res => {
      dispatch(changeList(res.data));
    });
};
