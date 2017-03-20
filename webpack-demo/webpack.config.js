var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist'),
	SRC_DIR = path.resolve(__dirname, 'src');

var env = process.env.WEBPACK_ENV;

var fileName,
	bundleName = 'bundle',
	plugins = [
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		})
	];

if (env === 'production') {
	plugins.push(new webpack.optimize.UglifyJsPlugin({ sourceMap: true, compressor: { warnings: true } }));
	plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
	plugins.push(new webpack.DefinePlugin({
         'process.env': {
            'WEBPACK_ENV': '"production"'
         }
    }));
	fileName = bundleName+'.min.js';
} else {
	plugins.push(new webpack.DefinePlugin({
         'process.env': {
            'WEBPACK_ENV': '"development"'
         }
    }));
	fileName = bundleName+'.js';
}

var config = {
	devtool: 'source-map',
	entry: SRC_DIR + '/app/index.js',
	output: {
		path: DIST_DIR + '/app',
		filename: fileName,
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
					{
						loader: 'style-loader'
					}, 
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					}
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