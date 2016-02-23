var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

gulp.task('webpack:build-prod', function (callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);

    myConfig.plugins = myConfig.plugins.concat(
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),

        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    webpack(myConfig, function (err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-prod", err);

        gutil.log("[webpack:build-prod]", stats.toString({
            // output options
        }));

        callback();
    });
});

gulp.task('webpack:build-local', function (callback) {
    webpack(webpackConfig, function (err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-dev", err);

        gutil.log("[webpack:build-dev]", stats.toString({
            // output options
        }));

        callback();
    });
});

// The development server ( the recommended option for development )
gulp.task('webpack-dev-server', function (callback) {
    // Start a webpack dev server
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
        publicPath: "/" + webpackConfig.output.publicPath
    }).listen(5000, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);

        // server listening
        gutil.log("[webpack-dev-server]", "localhost:5000");

        // keep the server alive or continue?
        // callback();
    });
});

gulp.task("default", ["webpack-dev-server"]);
gulp.task("local", ["webpack:build-local"]);
gulp.task("prod", ["webpack:build-prod"]);