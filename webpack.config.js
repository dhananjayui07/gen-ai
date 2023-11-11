const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const Modes = {
	DEVELOPMENT: 'development',
	PRODUCTION: 'production',
};

module.exports = (env, { mode }) => {
	const isProduction = mode === Modes.PRODUCTION;

	return {
		mode: Modes.DEVELOPMENT,
		entry: path.join(__dirname, 'src', 'index.ts'),
		devServer: {
			host: 'localhost',
			port: 3001,
			open: true,
			historyApiFallback: true,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js', '.jsx'],
		},
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, './dist'),
			publicPath: '/',
		},
		module: {
			rules: [
				{
					test: /\.(ts|tsx)?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.?js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.(scss|css)$/i,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
				{
					test: /\.(png|jp(e*)g|gif|webp|avif|ico)$/,
					use: ['file-loader'],
				},
				{
					test: /\.svg$/,
					use: ['@svgr/webpack'],
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(__dirname, 'public', 'index.html'),
				favicon: path.join(__dirname, 'src', 'assets/images/favicon.ico'),
			}),
		],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
	};
};
