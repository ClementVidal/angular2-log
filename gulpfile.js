// Include gulp
var gulp = require('gulp');

// Include Gulp Plugins
var ts = require('gulp-typescript');
var gls = require('gulp-live-server');

var path = require('path');

/**
 * Tasks for building, testing, and running demo
 */
// build_demo
var demoProject = ts.createProject('demo/tsconfig.json', {});
gulp.task('build_demo', ['build_src'], function() {

    var tsResult = gulp.src(['demo/src/*.ts'])
        .pipe(ts(tsProject, ts.reporter.defaultReporter()));

    return tsResult.js.pipe(gulp.dest('./demo/dist/js'));
});

// serve_demo
var server = null;
gulp.task('serve_demo', function() {
    server = gls.static(['demo'], 8888);
    server.start();
});

// watch demo sources files
gulp.task('watch_demo', ['build_demo', 'serve_demo', 'watch_src'], function() {
    gulp.watch(['demo/dist/js/*', 'demo/index.html'], function(file) {
        var notif = {
            type: 'changed',
            path: __dirname + '/demo/index.html'
        };
        server.notify.apply(server, [notif]);
    });
    gulp.watch(['demo/src/*.ts'], ['build_demo']);
});

/**
 * Tasks for building, and testing angular-log
 */
// build
var tsProject = ts.createProject('tsconfig.json', {});
gulp.task('build_src', function() {

    var tsResult = gulp.src([
            'src/*.ts'
        ])
        .pipe(ts(tsProject, ts.reporter.defaultReporter()));

    return tsResult.js.pipe(gulp.dest('./')).pipe(gulp.dest('./demo/dist/js'));
});

// build watch
gulp.task('watch_src', ['build_src'], function() {
    gulp.watch(['src/*.ts'], ['build_src']);
});

/**
 * Generic tasks
 */
gulp.task('build', ['build_demo']);

gulp.task('default', ['build_src', 'build_demo', 'watch_demo']);
