const path = require('path');
const merge = require('webpack-merge'); // 合并`webpack`配置
const baseConfig = require('./webpack.base');

const clientConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = merge(baseConfig, clientConfig);
