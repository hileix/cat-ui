const path = require('path')
const { version } = require('./package')

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  components: 'src/components/[A-Z]*/index.ts',
  ignore: ['**/TooltipOld/*.tsx'], // 不显示的组件
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
      rules: [
      {
        test: /(\.ts|\.tsx)$/,
        use: [ {
          loader: 'awesome-typescript-loader',
          options: {
            getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
          },
        }],
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /node_modules/,
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/,
      }, {
        test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }]
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
  }
}
