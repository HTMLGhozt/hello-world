const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack-common.config.js');

const webpackConfig = merge(common, {
	devServer: {
		historyApiFallback: true,
		port: 3000,
	},
	mode: 'development',
	plugins: [new HtmlWebpackPlugin()],
	devtool: 'source-map',
});

module.exports = webpackConfig;