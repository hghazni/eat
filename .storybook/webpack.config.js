const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '/../src/scss')
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: __dirname
            }
        ]
    }
}