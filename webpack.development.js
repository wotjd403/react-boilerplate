const { merge } = require('webpack-merge');
const path = require('path');

const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    host: 'localhost',
    port: '8080',
    headers: { 'Access-Control-Allow-Origin': '*' },
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    inline: true,
    compress: true,
    overlay: false,
  },
  plugins: [],
});
