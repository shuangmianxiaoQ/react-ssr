import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

const render = (store, routes, req, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Switch>{renderRoutes(routes)}</Switch>
      </StaticRouter>
    </Provider>
  );

  const cssStr = context.cssStyle ?? '';

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>SSR</title>
      <style>${cssStr}</style>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        // 数据注水
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      <script src="/index.js"></script>
    </body>
    </html>
  `;
};

export default render;
