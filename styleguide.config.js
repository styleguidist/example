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
