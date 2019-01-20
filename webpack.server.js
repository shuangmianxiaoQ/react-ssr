// 客户端会将`path`等模块打包到`bundle.js`，而服务器端不会，所以需要指定`target`
const path = require('path');

module.exports = {
  target: 'node', // 指定打包的代码是在服务器端还是客户端
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader', // 添加`babel-loader`和`@babel/core`依赖
        exclude: /node_modules/,
        options: {
          // 添加`@babel/preset-react`和`@babel/preset-stage-0`依赖
          presets: [
            '@babel/preset-react',
            '@babel/preset-stage-0',
            [
              // 根据环境做一些适配，添加`@babel/preset-env`依赖
              '@babel/preset-env',
              {
                // 打包编译时`babel`会去兼容所有主流浏览器的最后两个主版本
                targets: {
                  browsers: ['last 2 versions']
                }
              }
            ]
          ]
        }
      }
    ]
  }
};
