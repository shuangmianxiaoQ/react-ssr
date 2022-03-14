import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserInfo } from './store/actions';

// 同构：一套`React`代码在服务器端执行一次渲染出页面，
// 然后在客户端再执行一次，使得点击事件等有效

const Home = ({ userInfo, getUserInfo }) => {
  // 服务器端不执行componentDidMount，所以userInfo内容为空
  useEffect(() => {
    if (!userInfo.name) {
      getUserInfo();
    }
  }, []);

  return (
    <div>
      <div>welcome to home!</div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={userInfo.avatar_url} width={18} style={{ marginRight: 4, borderRadius: '50%' }} />
          <a href={userInfo.html_url} target="_blank">
            {userInfo.name}
          </a>
        </div>
        <div>
          followers:<Link to="/followers">{userInfo.followers}</Link>
        </div>
        <div>following: {userInfo.following}</div>
      </div>
      <button onClick={() => alert('clcik')}>click</button>
    </div>
  );
};

// 该函数负责在服务端渲染之前，把这个路由需要的数据加载提前加载好
Home.loadData = store => {
  return store.dispatch(getUserInfo());
};

const mapStateToProps = state => ({
  userInfo: state.home.userInfo
});

const mapDispatchToProps = dispatch => ({
  getUserInfo() {
    dispatch(getUserInfo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
