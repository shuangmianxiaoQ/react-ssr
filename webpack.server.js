// 客户端会将`path`等模块打包到`bundle.js`，而服务器端不会，所以需要指定`target`
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const serverConfig = {
  target: 'node', // 指定打包的代码是在服务器端还是客户端
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  externals: [nodeExternals()]
};

module.exports = merge(baseConfig, serverConfig);
