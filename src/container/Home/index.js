import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { getHomeList } from './store/actions';

// 同构：一套`React`代码在服务器端执行一次渲染出页面，
// 然后在客户端再执行一次，使得点击事件等有效

const Home = ({ list, getHomeList }) => {
  // 服务器端不执行componentDidMount，所以list内容为空
  useEffect(() => {
    if (!list.length) {
      getHomeList();
    }
  }, []);

  return (
    <div>
      <Header />
      <div>welcome to home!</div>
      {list.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      <button onClick={() => alert('clcik')}>click</button>
    </div>
  );
};

// 该函数负责在服务端渲染之前，把这个路由需要的数据加载提前加载好
Home.loadData = store => {
  return store.dispatch(getHomeList());
};

const mapStateToProps = state => ({
  list: state.home.list
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
