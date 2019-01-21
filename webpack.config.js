const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['./src/js/index.ts'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([
            // npm i -D copy-webpack-plugin
            {
                from: "./src/img/*.*",
                to: "./img",
                transformPath (targePath, absolutePath) {
                    // console.log(targePath, absolutePath);
                    const file = absolutePath.split("/").pop();
                    return Promise.resolve(`./img/${file}`)
                }
            },
            {
                from: "./src/css/*.*",
                to: "./css",
                transformPath (targePath, absolutePath) {
                    // console.log(targePath, absolutePath);
                    const file = absolutePath.split("/").pop();
                    return Promise.resolve(`./css/${file}`)
                } 
            }
        ])
    ],
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },
};