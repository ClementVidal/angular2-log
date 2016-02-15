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
var demoProject = ts.createProject('demo/src/tsconfig.json', {});
gulp.task('build_demo', function() {

    var tsResult = gulp.src([
            'node_modules/angular2/typings/browser.d.ts',
            'demo/src/*.ts'
        ])
        .pipe(ts(demoProject, ts.reporter.defaultReporter()));

    return tsResult.js.pipe(gulp.dest('./demo/lib'));
});

// serve_demo
var server = null;
gulp.task('serve_demo', function() {
    server = gls.static(['demo'], 8888);
    server.start();
});

// watch demo sources files
gulp.task('watch_demo', function() {
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
var tsProject = ts.createProject('src/tsconfig.json', {});
gulp.task('build_src', function() {

    var tsResult = gulp.src([
            'node_modules/angular2/typings/browser.d.ts',
            'src/*.ts'
        ])
        .pipe(ts(tsProject, ts.reporter.defaultReporter()));

    tsResult.dts.pipe(gulp.dest('./lib'));
    return tsResult.js.pipe(gulp.dest('./lib'));
});

// build watch
gulp.task('watch_src', function() {
    gulp.watch(['src/*.ts'], ['build_src']);
});

/**
 * Generic tasks
 */
gulp.task('build', ['build_src', 'build_demo']);
gulp.task('demo', ['build', 'watch_src', 'watch_demo', 'serve_demo']);

gulp.task('default', ['demo']);
