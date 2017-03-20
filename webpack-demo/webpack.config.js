var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist'),
	SRC_DIR = path.resolve(__dirname, 'src');

var WEBPACK_ENV = process.env.WEBPACK_ENV = process.env.NODE_ENV = (process.argv.indexOf('-p') !== -1)?'production':'development';

var plugins = [
	new webpack.ProvidePlugin({
		jQuery: 'jquery',
		$: 'jquery',
		jquery: 'jquery'
	})
];

if(WEBPACK_ENV === 'production') {
	plugins.push(new webpack.optimize.UglifyJsPlugin({ sourceMap: true, compressor: { warnings: true } }));
	plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
	plugins.push(new webpack.DefinePlugin({
         'process.env': {
            'WEBPACK_ENV': JSON.stringify(WEBPACK_ENV)
         }
    }));
} else {
	plugins.push(new webpack.DefinePlugin({
         'process.env': {
            'WEBPACK_ENV': JSON.stringify(WEBPACK_ENV)
         }
    }));
}

var config = {
	devtool: 'source-map',
	entry: SRC_DIR + '/app/index.js',
	output: {
		path: DIST_DIR + '/app',
		filename: 'bundle.js',
		publicPath: '/app/'
	},
	plugins: plugins,
	module: {
		rules: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: 'babel-loader',
				options: {
					presets: [
						['es2015', { modules: false }], 
						'stage-2'
					]
				}
			},
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: 'eslint-loader',
			},
			{
                test: /\.css$/, 
                include: SRC_DIR,
                use: [
					'style-loader',
					'css-loader'
				]
            },
            {
            	test: /\.(jpe?g|gif|png)$/,
            	include: SRC_DIR,
            	loader: 'file-loader'
            },
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, 
				use: [{
					loader: 'file-loader',
					options: {
						limit: 10000,
						mimetype: 'application/font-woff'
					}
				}] 
			},
			{
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, 
				use: [{
					loader: 'file-loader',
					options: {
						limit: 10000,
						mimetype: 'application/font-woff2'
					}
				}]
			},
			{
				test: /\.[ot]tf(\?v=\d+\.\d+\.\d+)?$/, 
				use: [{
					loader: 'file-loader',
					options: {
						limit: 10000,
						mimetype: 'application/octet-stream'
					}
				}] 
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
				loader: "file-loader"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
				use: [{
					loader: 'file-loader',
					options: {
						limit: 10000,
						mimetype: 'image/svg+xml'
					}
				}] 
			}
		]
	}
};

module.exports = config;