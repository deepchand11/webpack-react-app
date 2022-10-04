// container/config/webpack.common.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader']
            // }
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // fallback to style-loader in development
                    // process.env.NODE_ENV !== "production"
                    //     ? "style-loader"
                    //     : MiniCssExtractPlugin.loader,
                    MiniCssExtractPlugin.loader,
                    // {
                    //     loader: "css-loader",
                    //     options: {
                    //         importLoaders: 1, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                    //         minimize: true,
                    //         modules: true
                    //     }
                    // },
                    {
                        loader: "css-loader",
                        options: {
                          modules: true,
                          importLoaders: 1,
                        },
                      },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ]
                            }
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        },
                    },
                ],
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    // optimization: {
    //     runtimeChunk: 'single',
    // },
}
