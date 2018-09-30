const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

//var APP_DIR = path.resolve(__dirname, '../src');


// __dirname返回的是当前被执行js所在的文件夹的绝对路径
const config = merge(baseConfig, {
    output: {
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        port: 300,
        host: '0.0.0.0',
        proxy: {
            '/api/*': {
                target: 'http://localhost:8089'
            },
            '/category/*': {
                target: 'http://localhost:8089'
            }
        }
    }
})

module.exports = config;