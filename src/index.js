import express from 'express';
import Home from './container/Home';
import React from 'react';
import { renderToString } from 'react-dom/server';

// 客户端渲染
// `React`代码运行在浏览器上，消耗的是浏览器的性能
// 首屏加载速度慢，不利于`SEO`，禁用`JS`后无法使用

// 服务端渲染
// `React`代码运行在服务器上，消耗的是服务器的性能

const app = express();
const content = renderToString(<Home />);

app.get('/', (req, res) => {
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
      ${content}
    </body>
    </html>
  `);
});

const server = app.listen(3000);
