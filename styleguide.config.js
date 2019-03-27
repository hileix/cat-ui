const path = require('path')
const { version } = require('./package')

module.exports = {
  components: 'src/components/**/[A-Z]*.tsx',
  // components: 'src/components/*(ButtonDemo|CardDemo|Checkbox)/[A-Z]*.tsx',
  // ignore: ['**/*.spec.js', '**/components/Button.tsx'], // 不显示的组件
  defaultExample: true,
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: true } }).parse,
  moduleAliases: {
    'rsg-example': path.resolve(__dirname, 'src')
  },
  ribbon: {
    url: 'http://gitlab.ximalaya.com/HIFE/cat-ui',
    text: 'Fork me on GitLab'
  },
  version,
  webpackConfig: {
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /(\.ts|\.tsx?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader' // 将 JS 字符串生成为 style 节点
        }, {
          loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // 将 JS 字符串生成为 style 节点
        }, {
          loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: 'sass-loader' // 将 Sass 编译成 CSS
        }]
      }
      ]
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    }
  }
}
