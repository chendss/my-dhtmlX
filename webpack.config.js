const path = require("path")
const webpack = require('webpack')

module.exports = {
    // 文件夹和文件需要自己创建
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './main.js'
    },
    // 下面的文件夹和文件不需要自己创建
    output: {
        path: path.resolve(__dirname, '../'),
        filename: 'bundle.js'
    }
}