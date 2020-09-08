const {merge} = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ],
    devServer: {
        contentBase: baseWebpackConfig.externals.path.dist,
        overlay: {
            warnings: false,
            errors: true
        },
        port: 3000
    },
});

module.exports = new Promise(res => res(devWebpackConfig));
