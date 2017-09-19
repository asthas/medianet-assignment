/**
 * Webpack configuration to build the project
 */

'use strict';

const { resolve }        = require('path');
const webpack            = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');

// Helper function to include plugin only
// if the current build is a production build
const ifProd = (plugin) => (isProd) => isProd ? plugin : null;

const srcFolder  = resolve(__dirname, 'src');
const distFolder = resolve(__dirname, 'dist');

module.exports = (env) => ({
	// Code entry point for bundles
	entry: {
		// 1. `vendor` for files that don't change (eg. dependencies)
		'vendor': [
			'bulma',
			'react',
			'react-dom',
			'typestyle',
		],
		// 2. `app` for application code
		'app': './index.js',
	},

	// Output configuration
	output: {
		// output directory
		path: distFolder,
		// name the files app.js and vendor.js (based on entry names)
		filename: '[name].js',
	},

	// Reference files from the `src` folder
	context: srcFolder,

	// Generate source map for minified / transpiled code
	devtool: 'source-map',

	// Extensions to resolve when using import or require
	resolve: {
		extensions: ['.webpack.js', '.web.js', '.js', '.json'],
	},

	// Plugins to apply while compiling build
	plugins: [
		// Delete existing `dist` folder if any
		new CleanWebpackPlugin(distFolder),

		// Copy files from public folder to dist (including data.json)
		new CopyWebpackPlugin([{ from: resolve(srcFolder, '../public') }]),

		// Extract common chunks from bundles (ie. same dependencies)
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'manifest'],
			minChunks: Infinity,
		}),

		new webpack.DefinePlugin({
			'process.env': {
				// Set `NODE_ENV` to production while preparing production build
				// useful for minimzing libraries like react
				NODE_ENV: env.prod ? '"production"' : '"development"',
			},
		}),

		// Tell all loaders to set debug to false and minimize to true if build is production
		ifProd(new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false,
		}))(env.prod),

		// Enable compression by uglifyjs if build is production
		ifProd(new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true,
				warnings: false,
			},
		}))(env.prod),

		// Insert generated scripts to the index.html
		new HtmlWebpackPlugin({ template: resolve(srcFolder, '../public/index.html') }),
	].filter(plugin => !!plugin), // Remove empty plugins that are set to null by `ifProd`

	module: {
		// Loaders to apply while compiling build
		rules: [
			{
				// Apply this loader to all `.js` files
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
								cacheDirectory: true,
								plugins: [
									'transform-class-properties'
								],
								presets: [
									'env',
									'react',
								],
						},
					},
				],
			},
			{
				// Apply this loader to all `.scss` or `.sass` files for SASS processing
				// required for using `bulma` with `webpack`
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