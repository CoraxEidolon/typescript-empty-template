const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Webpack = require('webpack');

const SITE_PAGES = {
    main: [
        "./ts/main.tsx"
    ],
}

module.exports = {
    mode: process.env.NODE_ENV,
    entry: SITE_PAGES,
    module: {
        rules: [
            // все файлы с расширением .ts или .tsx будут обрабатываться ts-loader 
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(), // Очищает все файлы в папке сборки перед началом сборки
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