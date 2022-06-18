const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './html/index.html',
            filename: 'index.html'
        }
        ),
        new VueLoaderPlugin()
    ],
    mode: 'development',
    entry: "./src/main.js",
    output: {
        path: join(__dirname, 'lib'),
        filename: 'index.js',
        clean: true
    },
    module: {
        rules: [
            // css
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            // less
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // 图片
            {
                test: /\.(png|gif|jpeg|jpg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024
                    }
                },
                generator: {
                    filename: 'images/[hash:6][ext]'
                }
            },
            // 字体图标
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name].[hash:6][ext]'
                }
            },
            // 高级语法兼容
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ["babel-loader"]
            },
            // vue
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    devServer: {
        port: 30000,
        open: true
    }
}