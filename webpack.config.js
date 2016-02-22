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
                loader: 'babel',
                include: './src',
                query: {
                    presets: ["react", "es2015", "stage-0"]
                }
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