/**
 * 客户端渲染
 * `React`代码运行在浏览器上，消耗的是浏览器的性能
 * 首屏加载速度慢，不利于`SEO`，禁用`JS`后无法使用
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routes from '../routes';
import { getClientStore } from '../store';

const store = getClientStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>{renderRoutes(routes)}</Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(<App />, document.getElementById('root'));
