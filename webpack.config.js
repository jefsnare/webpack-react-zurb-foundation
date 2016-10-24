var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js',
        components: './src/components.js'
    },
    output: { path: './dist', filename: '[name].js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /(foundation\.core)/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.scss/,
                context: './src/components/',
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
                    'resolve-url',
                    'sass'
                ]
            }, {
                test: /\.sass/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
            
        ]
    },
    sassLoader: {
        includePaths: [
            './bower_components/foundation-sites/scss/',
            './src/'
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/[name].css'),
        // new webpack.optimize.UglifyJsPlugin(),
        // new webpack.optimize.DedupePlugin(),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
