import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';

// 同构：一套`React`代码在服务器端执行一次渲染出页面，
// 然后在客户端再执行一次，使得点击事件等有效

const Home = ({ name }) => (
  <div>
    <Header />
    <div>welcome to home!</div>
    <div>hello {name}</div>
    <button onClick={() => alert('clcik')}>click</button>
  </div>
);

const mapStateToProps = state => ({
  name: state.name
});

export default connect(
  mapStateToProps,
  null
)(Home);
