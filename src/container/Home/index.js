import React from 'react';

// 同构：一套`React`代码在服务器端执行一次渲染出页面，
// 然后在客户端再执行一次，使得点击事件等有效

const Home = () => (
  <div>
    <div>welcome to home!</div>
    <button onClick={() => alert('clcik')}>click</button>
  </div>
);

export default Home;
