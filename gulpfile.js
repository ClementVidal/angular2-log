// Include gulp
var gulp = require('gulp');

// Include Gulp Plugins
var ts = require('gulp-typescript');
var gls = require('gulp-live-server');

var path = require('path');

/**
 * Compilation task
 */
// build_ts
var tsProject = ts.createProject('tsconfig.json', {});

gulp.task('build_ts', function() {

    var tsResult = gulp.src([
            'src/*.ts'
        ])
        .pipe(ts(tsProject, ts.reporter.defaultReporter()));

    return tsResult.js.pipe(gulp.dest('./dist/js'));
});

// build_demo
var demoProject = ts.createProject('demo/tsconfig.json', {});

gulp.task('build_demo', function() {

    var tsResult = gulp.src([
            'demo/src/*.ts'
        ])
        .pipe(ts(tsProject, ts.reporter.defaultReporter()));

    return tsResult.js.pipe(gulp.dest('./demo/dist/js'));
});

// serve_demo
gulp.task('serve_demo', function() {

    var server = gls.static(['demo', '.'], 8888);
    server.start();
});

// Build
gulp.task('build', ['build_ts']);

// build watch
gulp.task('watch', function() {
    gulp.watch(['src/*.ts'], ['build_ts']);
});

/**
 * General task
 */
gulp.task('default', ['build', 'watch']);
