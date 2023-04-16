const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.(ts|tsx|js|jsx)$/,
    loader: require.resolve('ts-loader'),
  }),
  addWebpackModuleRule({
    test: /\.json$/,
    loader: require.resolve('json-loader'),
    type: 'javascript/auto',
  })
);