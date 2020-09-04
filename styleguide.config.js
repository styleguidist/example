module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	theme: {
		fontSize: {
			base: 32,
			text: 45,
		},
	},
	webpackConfig: {
		devServer: {
			// Docs: https://codesandbox.io/docs/environment#how-can-i-tell-if-i-am-in-a-container-sandbox
			disableHostCheck: !!process.env.CODESANDBOX_SSE,
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true
							}
						},
					],
				},
			],
		},
	},
};
