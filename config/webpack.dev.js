const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')


const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/'
    },
    devServer: {
        port: 3900,
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    }
}

module.exports = merge(commonConfig, devConfig)