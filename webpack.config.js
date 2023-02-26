const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');
const path = require('path')

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
    mode: mode,
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: "asset/[hash][ext][query]",
        clean: true,
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin(
            {filename: '[name].[contenthash].css'}
        ),
        new HtmlWebpackPlugin( {
            filename:'index.html',
            template:path.join(__dirname, 'src', 'index.pug'),
    }),
        new HtmlWebpackPlugin ({
            filename: '_head.pug',
            template: "./src/pug/_head.pug"
    }),
        new HtmlWebpackPlugin( {
        filename: "color-and-types.html",
        template: "./src/color-and-types.pug"
    }),
    new HtmlWebpackPlugin( {
        filename: "form-elements.html",
        template: "./src/form-elements.pug"
    })
    ],
    
    module: {
        rules:[{
            test: /\.html$/i,
            loader: "html-loader",
            },
             {
            test: /\.(sa|sc|c)ss$/,
            use: [
                (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader",
            ]
            }, 
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',

            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                },
            {
                test: /\.m&js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
                },
        ]
    },
}



        