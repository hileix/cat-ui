const path = require('path')

module.exports = {
  mode: 'production',

  entry: {
    main: ['./src/components/index.ts']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },

  module: {
    rules: [{
      test: /(\.ts|\.tsx?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader' // 将 JS 字符串生成为 style 节点
      }, {
        loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
      }]
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader' // 将 JS 字符串生成为 style 节点
      }, {
        loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
      }, {
        loader: 'sass-loader' // 将 Sass 编译成 CSS
      }]
    }]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
}
