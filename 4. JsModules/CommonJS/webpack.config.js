const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Режим сборки приложения
    mode: 'development',

    // Точка входа в приложение
    entry: path.resolve(__dirname, "src/index.js"),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },

    plugins: [
        new HTMLWebpackPlugin({
            templae: path.resolve(__dirname, 'public', 'index.html')
        })
    ]
}