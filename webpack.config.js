const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist"
    },
    devServer: {
        overlay: true,
        port: 3000
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: ['babel-loader']
            }
        ]
    }
};
