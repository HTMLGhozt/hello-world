const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.ts',
	resolve: {
		alias: {
			svelte: path.resolve('../../node_modules', 'svelte'),
		},
		extensions: ['.mjs', '.ts', '.tsx', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main'],
	},
	output: {
		path: `${__dirname}/public`,
		filename: '[name].js',
		chunkFilename: '[name].[id].js',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [{
					loader: 'ts-loader',
				}],
			},
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
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [require('tailwindcss'), require('autoprefixer')],
						},
					},
				],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin()],
};
