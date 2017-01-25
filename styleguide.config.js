const path = require('path');

module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	components: './lib/components/**/[A-Z]*.js',
	webpackConfig(env) {
		const dir = path.resolve(__dirname, 'lib');
		return {
			module: {
				rules: [
					{
						test: /\.jsx?$/,
						include: dir,
						loader: 'babel-loader',
					},
					{
						test: /\.css$/,
						include: dir,
						loader: 'style-loader!css-loader?modules&importLoaders=1',
					}
				]
			}
		};
	},
};
