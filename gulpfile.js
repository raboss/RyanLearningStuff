var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var reload = browserSync.reload;
var assign = require('object.assign');
var typescript = require('gulp-typescript');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
    return runSequence(
        'es6',
        'typescript',
        'watch',
        callback
    );
});
gulp.task('es6', function() {
    gulp.src('app/**').pipe(gulp.dest('devTemp'));
    return gulp.src('app/**/*.es6.js')
    .pipe(babel(assign({}, {modules:'amd'})))

    .pipe(rename(function(path) {
        path.basename = path.basename.replace('.es6', '');
    }))
    .pipe(gulp.dest('devTemp'));
});
gulp.task('typescript', function() {
    gulp.src('app/**').pipe(gulp.dest('devTemp'));
    return gulp.src('app/**/*.ts')
    .pipe(typescript(assign({}, {module:'amd'})))

    .pipe(rename(function(path) {
        path.basename = path.basename.replace('.es6', '');
    }))
    .pipe(gulp.dest('devTemp'));
});

gulp.task('watch', function() {
     browserSync({
        server: {
            baseDir: 'devTemp'
        }
    });
    gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'devTemp'}, reload);
});