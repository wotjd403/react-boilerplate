const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { transpileOnly: true },
        exclude: /node_modules/,
      },
      {
        test: /\.(html)$/,
        use: { loader: 'html-loader' },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      inject: true,
      filename: path.join(__dirname, './dist/index.html'),
    }),

    /**
     * fork-ts-checker-webpack-plugin
     * tsconfig 설정과 맞출 것
     *
     * https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#options 참조
     */
    new ForkTsCheckerWebpackPlugin({
      async: true,
      typescript: { configFile: path.join(__dirname, '/tsconfig.json') },
      logger: { infrastructure: 'silent', issued: 'console' },
    }),

    /**
     * eslint-webpack-plugin
     * eslint 설정과 맞출 것
     * https://github.com/webpack-contrib/eslint-webpack-plugin 참조
     */
    new ESLintPlugin({
      context: path.resolve(__dirname, './src'),
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@images': path.resolve(__dirname, 'public/images'),
      '@fonts': path.resolve(__dirname, 'public/fonts'),
    },
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
};
