var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('webpack', function (callback) {
    var webpackConfig = require('./webpack.config.js');

    webpack(webpackConfig, function (err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);

        gutil.log("[webpack]", stats.toString({
            // output options
        }));

        callback();
    });
});

gulp.task('webpack-dev-server', function (callback) {
    var webpackConfig = require('./webpack.config.js');

    // Start a webpack dev server
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
        // server and middlewares options
    }).listen(8080, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);

        // server listening
        gutil.log("[webpack-dev-server]", "error-message");

        // keep the server alive or continue?
        // callback();
    });
});

gulp.task("default", ["webpack"]);