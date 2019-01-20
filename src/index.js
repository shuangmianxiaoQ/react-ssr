const express = require('express');
const app = express();
const Home = require('./container/Home');

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Hello</title>
        <body>
          <h1>hello world</h1>
        </body>
      </head>
    </html>
  `);
});

const server = app.listen(3000);
