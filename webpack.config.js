const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: 'production',

  entry: {
    Button: './src/components/Button/index.ts',
    Input: './src/components/Input/index.ts'
  },

  output: {
    path: path.resolve(__dirname, 'lib/components'),
    publicPath: '/',
    filename: '[name].cache.js',
    // library: 'someLibName',
    // libraryTarget: 'umd',
    // filename: 'someLibName.js',
    // auxiliaryComment: 'Test Comment',
  },

  module: {
    rules: [{
      test: /(\.ts|\.tsx?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ]
    }]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
}
