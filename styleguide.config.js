module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	sections: [
		{
			name: 'Components',
			content: './styleguide/CNAME',
			sections: [
				{
					name: 'Common',
					components: './lib/components/Common/**/index.tsx',
				}
			]
		}
	],
	propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
	webpackConfig: {
		module: {
			loaders: [
				{
					test: /\.(ts|tsx)?$/,
					exclude: /node_modules/,
					loader: 'ts-loader',
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader?modules&importLoaders=1',
				}
			]
		}
	},
};
