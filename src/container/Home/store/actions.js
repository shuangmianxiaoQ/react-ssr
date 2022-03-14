import { CHANGE_USER_INFO } from './constants';

const changeUserInfo = info => ({
  type: CHANGE_USER_INFO,
  userInfo: info
});

export const getUserInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/users/shuangmianxiaoQ').then(res => {
      dispatch(changeUserInfo(res.data));
    });
  };
};
