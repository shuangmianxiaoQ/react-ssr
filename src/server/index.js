/**
 * 服务端渲染
 * `React`代码运行在服务器上，消耗的是服务器的性能
 */

import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import routes from '../routes';
import { getStore } from '../store';
import render from './utils';

const app = express();

app.use(express.static('public'));

app.use(
  '/users',
  proxy('https://api.github.com', {
    proxyReqPathResolver: req => {
      return '/users' + req.url;
    }
  })
);

app.get('*', (req, res) => {
  const store = getStore();
  // 根据路由的路径，往store里加数据
  // 让matchedRoutes里所有的组件对应的loadData方法执行一次
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise(resolve => {
        item.route.loadData(store).then(resolve).catch(resolve);
      });
      promises.push(promise);
    }
  });

  Promise.all(promises).then(() => {
    const context = {};
    const html = render(store, routes, req, context);

    if (context.status === 404) {
      res.status(404);
    }

    res.send(html);
  });
});

const server = app.listen(3000);
