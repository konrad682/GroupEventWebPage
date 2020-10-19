const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]"
                    }
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/, 
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new webpack.DefinePlugin({
            // global app config object
            config: JSON.stringify({
                apiUrl: 'http://localhost:4000'
            })
        }),
        new CopyPlugin([
            { from: { glob: "images/**" } }, // images folder
            { from: { glob: "fonts/**"  } },
            { from: { glob: "**/*.jpg"  } },
            { from: { glob: "**/*.png"  } }
        ])
    ],
    devServer: {
        historyApiFallback: true
    }
}