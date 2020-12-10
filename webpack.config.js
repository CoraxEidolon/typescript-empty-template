const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CREATE_SEPARATE_CSS_FILES = false;

const SITE_PAGES = {
    main: [
        "./src/pages/main.tsx"
    ],
}

module.exports = {
    mode: process.env.NODE_ENV,
    entry: SITE_PAGES,
    module: {
        rules: [
            {
                test: /\.tsx?$/,// все файлы с расширением .ts или .tsx будут обрабатываться ts-loader
                loader: "ts-loader"
            },
            {
                test: /\.svg(\?.*)?$/, // match img.svg and img.svg?param=value
                use: [
                    "url-loader", // or file-loader or svg-url-loader
                    "svg-transform-loader"
                ]
            },
            {
                test: /\.[s]?css$/,
                use: [
                    CREATE_SEPARATE_CSS_FILES ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(), // Очищает все файлы в папке сборки перед началом сборки
        new MiniCssExtractPlugin({
            path: path.resolve("./build"),
            filename: "[name].css",
        }),
    ],
    output: {
        path: path.resolve(__dirname, "build"), // Помещаем полученный файл с именем как в entry в папку build
        filename: "[name].js",
    }
};

const dateBuild = new Date();
console.log("\x1b[31m%s\x1b[0m", "         *    ");
console.log("\x1b[31m%s\x1b[0m", "       * * *  ");
console.log("\x1b[31m%s\x1b[0m", "     * * * * *");
console.log("\x1b[31m%s\x1b[0m", "       * * *  ");
console.log("\x1b[31m%s\x1b[0m", "         *    ");
console.log("\x1b[33m%s\x1b[0m", "____________________________________________________");
console.log(dateBuild.toLocaleDateString() + " " + dateBuild.toLocaleTimeString());
console.log("\x1b[33m%s\x1b[0m", "____________________________________________________");
