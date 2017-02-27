var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
   devtool: 'source-map',
   entry: [
      SRC_DIR + '/index'
   ],
   output: {
      path: DIST_DIR,
      filename: 'bundle.js',
      publicPath: '/static/'
   },
   plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.DefinePlugin({
         'process.env': {
            'NODE_ENV': '"production"'
         }
      }),
      new webpack.optimize.UglifyJsPlugin({
         compressor: {
            warnings: false
         }
      })
   ],
   module: {
      loaders: [
         // js
         {
            test: /\.js$/,
            loaders: ['babel'],
            include: SRC_DIR
         },
         // CSS
         { 
            test: /\.styl$/, 
            include: SRC_DIR,
            loader: 'style-loader!css-loader!stylus-loader'
         }
      ]
   }
};
