module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'usage'
      }
    ],
    '@babel/react'
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
  env: {
    "test": {
      "presets": [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react'
      ]
    },
  }
}
