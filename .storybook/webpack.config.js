const path = require('path');

function srcPath(subdir) {
  return path.join(__dirname, "../src", subdir);
}

module.exports = ({ config }) => {
  // ts
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      }
    ],
  });

  // scss
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          // Prefer `dart-sass`
          implementation: require('sass'),
          sourceMap: true
        },
      }
    ],
    include: path.resolve(__dirname, '../src'),
  });

  // images
  config.module.rules.push({
    test: /\.(png|svg|jpg|gif)$/,
    loaders: ['file-loader']
  });

  // alias
  config.resolve.alias = {
    '@utils': srcPath('utils/'),
    '@components': srcPath('components/')
  };

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
