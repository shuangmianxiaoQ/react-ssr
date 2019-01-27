/**
 * 服务端渲染
 * `React`代码运行在服务器上，消耗的是服务器的性能
 */

import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Routes from '../Routes';

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  const App = () => (
    // 路由使用`StaticRouter`
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );
  const content = renderToString(<App />);

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>SSR</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/index.js"></script>
    </body>
    </html>
  `);
});

const server = app.listen(3000);
