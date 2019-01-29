/**
 * 服务端渲染
 * `React`代码运行在服务器上，消耗的是服务器的性能
 */

import express from 'express';
import render from './utils';

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => res.send(render(req)));

const server = app.listen(3000);
