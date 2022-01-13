const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
	devServer: {
		overlay: false,
		port: process.env.VUE_APP_PORT || 8000,
		proxy: {
			'/api': {
				target: 'http://localhost:8080/',
				ws: true,
			},
		},
	},
	configureWebpack: {
		entry: ['babel-polyfill', './src/main.js'],
		plugins: [
			new CopyWebpackPlugin({
				patterns: [
					{
						from: __dirname + '/src/bootstrap',
						to: 'bootstrap',
						noErrorOnMissing: true,
					},
				],
			}),
		],
	},
};
