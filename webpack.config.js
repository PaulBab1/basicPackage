var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: __dirname+'/src/main.js',
    output: {
        path: __dirname+'/dist/js/',
        filename: 'main.bundle.js',
        library: 'main',
        libraryTarget: 'umd',
        umdNamedDefine:true
    },
    module: {
        loaders: [

              {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
              },
                {
                test:/\.scss$/,
                loaders: [ 'style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap' ]
                }

        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    watch:true,
    watchOptions:{
      aggregateTimeout:300,
      poll:1000
    }
};
