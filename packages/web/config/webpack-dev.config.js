const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack-common.config.js');

const webpackConfig = merge(common, {
	devServer: {
		historyApiFallback: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: 'svelte-loader',
						options: {
							emitCss: false,
							hotReload: true,
							preprocess: require('svelte-preprocess')({
								typescript: {
									transpileOnly: true,
								},
							}),
						},
					},
				],
			},
		],
	},
	mode: 'development',
	plugins: [new HtmlWebpackPlugin()],
	devtool: 'source-map',
});

module.exports = webpackConfig;