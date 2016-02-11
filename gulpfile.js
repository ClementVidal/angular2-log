// Include gulp
var gulp = require('gulp');

// Include Gulp Plugins
var ts = require('gulp-typescript');

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
