/**
 * Webpack configuration to build the project
 */

'use strict';

const { resolve }       = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  entry: {
    'vendor': [
      'bulma',
      'react',
      'react-dom',
      'typestyle',
    ],
    'app': './index.js',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  context: resolve(__dirname, 'src'),
  devtool: 'source-map',
  resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.webpack.js', '.web.js', '.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: '../public/index.html' }),
  ],
  module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: [
                  'env',
                  'react',
                ],
              },
            },
          ],
        },
      ]
  }
});
