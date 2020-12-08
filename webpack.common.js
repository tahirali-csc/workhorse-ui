const path = require('path')
const HTMLwebplugin = require('html-webpack-plugin')

const rules = [
    {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        "targets": "defaults"
                    }],
                    '@babel/preset-react'
                ]
            }
        },
    },
    {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
    },
    {
        test: /\.html$/,
        loader: 'html-loader',
    },
]
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
    },
    module: { rules },
    plugins: [
        new HTMLwebplugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            hash: true,
            inject: true,
        }),
    ],
    stats: {
        children: false,
    },
}