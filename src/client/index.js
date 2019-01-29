/**
 * 客户端渲染
 * `React`代码运行在浏览器上，消耗的是浏览器的性能
 * 首屏加载速度慢，不利于`SEO`，禁用`JS`后无法使用
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../Routes';
import getStore from '../store';

const App = () => (
  <Provider store={getStore()}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(<App />, document.getElementById('root'));
