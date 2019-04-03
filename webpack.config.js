const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: 'production',

  entry: getEntry(),

  output: {
    path: path.resolve(__dirname, 'lib/components'),
    publicPath: '/',
    filename: '[name]/[name].min.js',
    // auxiliaryComment: 'Test Comment',
    library: 'cat-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  module: {
    rules: [{
      test: /(\.ts|\.tsx)$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
      exclude: /node_modules/
    }]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]/[name].css",
      chunkFilename: "[id].css"
    })
  ],
}

// 获取各个文件目录
function getEntry () {
  let entry = {}
  const files = path.resolve(__dirname, './src/components/**/[A-Z]*.tsx')

  glob.sync(files).forEach(function(filePath){
    const index1 = filePath.lastIndexOf('/')
    const index2 = filePath.lastIndexOf('/', index1 - 1)
    const folder = filePath.slice(index2 + 1, index1)
    if (entry[folder]) {
      entry[folder].push(filePath)
    } else {
      entry[folder] = [filePath]
    }
  })

  return entry
}
