module.exports = {
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
            // '@babel/preset-stage-0',
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
