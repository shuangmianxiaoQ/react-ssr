/**
 * 服务端渲染
 * `React`代码运行在服务器上，消耗的是服务器的性能
 */

import express from 'express';
import { matchRoutes } from 'react-router-config';
import routes from '../routes';
import { getStore } from '../store';
import render from './utils';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = getStore();
  // 根据路由的路径，往store里加数据
  // 让matchedRoutes里所有的组件对应的loadData方法执行一次
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    res.send(render(store, routes, req));
  });
});

const server = app.listen(3000);
