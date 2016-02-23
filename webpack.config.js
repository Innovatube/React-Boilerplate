module.exports = {
    entry: './src',
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            // JavaScript ES6
            {
                test: /\.jsx?$/,
                loader: 'babel'
            },

            // SASS
            {
                test:   /\.scss/,
                loaders: ['style', 'css', 'sass']
            },

            // HTML
            {
                test:   /\.html/,
                loader: 'html'
            }
        ]
    }
};