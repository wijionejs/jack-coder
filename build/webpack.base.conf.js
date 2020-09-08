const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

const PATH = {
    src: path.join(__dirname, '..', 'src'),
    dist: path.join(__dirname, '..', 'dist'),
    assets: 'assets/'
};

module.exports = {
    externals: {
        path: PATH
    },
    entry: {
        app: PATH.src
    },
    output: {
        filename: `${PATH.assets}js/[name].js`,
        path: PATH.dist,
        publicPath: "/"
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: ['babel-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        scss: ['vue-style-loader!css-loader!sass-loader']
                    }
                }
            },
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.s[ca]ss$/,
                loader: [
                    'style-loader',
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: `${PATH.assets}css/[name].css`,
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: `${PATH.src}/img`, to: `${PATH.assets}img` },
                { from: `${PATH.src}/static`, to: "" }
            ]
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATH.src}/index.html`,
            filename: "./index.html"
        }),
        new VueLoaderPlugin()
    ]
};
