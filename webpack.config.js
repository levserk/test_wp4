'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        a: './src/index.js',
        b: './src/b.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: 'build/[name].[hash].js'
    },
    module:{
        rules: [{
            test:   /\.css$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2|mp3|wav|ogg)$/,
            use: [
                {
                    loader: 'file-loader'
                }

            ]
        }],
        noParse: /\.min\.js/
    },
    devtool: "source-map",
    stats: {
        assets: true,
        colors: true,
        errors: true,
        errorDetails: true,
        hash: false,
        maxModules: 1
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
    devServer: {
        hot: true,
        contentBase: path.resolve('./dist'),
        port: 8001
    },
    optimization: {
        runtimeChunk: 'multiple',
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'commons',
              chunks: 'all'
            }
          }
        }
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve('dist')]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};