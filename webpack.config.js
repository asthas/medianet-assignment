/**
 * Webpack configuration to build the project
 */

'use strict';

const { resolve }        = require('path');
const webpack            = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');

const ifProd = (plugin) => (isProd) => isProd ? plugin : null;

const srcFolder  = resolve(__dirname, 'src');
const distFolder = resolve(__dirname, 'dist');

module.exports = (env) => ({
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
	path: distFolder,
	filename: '[name].js',
	publicPath: '/',
  },
  context: srcFolder,
  devtool: 'source-map',
  resolve: {
	  // Add `.ts` and `.tsx` as a resolvable extension.
	  extensions: ['.webpack.js', '.web.js', '.js', '.json'],
  },
  plugins: [
	new CleanWebpackPlugin(distFolder),
	new CopyWebpackPlugin([{ from: resolve(srcFolder, '../public') }]),
	new webpack.optimize.CommonsChunkPlugin({
	  name: ['vendor', 'manifest'],
	  minChunks: Infinity,
	}),
	new webpack.HashedModuleIdsPlugin(),
	new webpack.DefinePlugin({
	  'process.env': {
		NODE_ENV: env.prod ? '"production"' : '"development"',
	  },
	}),
	ifProd(new webpack.LoaderOptionsPlugin({
	  minimize: true,
	  debug: false,
	}))(env.prod),
	ifProd(new webpack.optimize.UglifyJsPlugin({
	  compress: {
		screw_ie8: true,
		warnings: false,
	  },
	}))(env.prod),
	new HtmlWebpackPlugin({ template: resolve(srcFolder, '../public/index.html') }),
  ].filter(plugin => !!plugin),
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
		{
		  test: /\.(scss|sass)$/,
		  use: [
			{
			  loader: 'style-loader' // creates style nodes from JS strings
			},
			{
			  loader: 'css-loader' // translates CSS into CommonJS
			},
			{
			  loader: 'sass-loader' // compiles Sass to CSS
			}
		  ],
		},
	  ]
  }
});
