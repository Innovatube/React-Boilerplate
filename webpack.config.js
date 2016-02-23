var path = require("path");

module.exports = {
    entry: path.join(__dirname, "src"),
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "dist/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
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
                test:   /\.scss$/,
                loaders: ['sass', 'css', 'style']
            },

            // CSS
            {
                test: /\.css$/,
                loaders: ['css', 'style']
            },

            // HTML
            {
                test:   /\.html/,
                loader: 'html'
            }
        ]
    }
};