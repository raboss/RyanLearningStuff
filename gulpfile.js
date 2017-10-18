var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var reload = browserSync.reload;
var assign = require('object.assign');
var compilerOptions = require('./config/babel-options');

gulp.task('default', function() {
    gulp.src('app/**').pipe(gulp.dest('devTemp'));
    gulp.src('app/**/*.es6.js')
    .pipe(babel(assign({}, compilerOptions, {modules:'amd'})))

    .pipe(rename(function(path) {
        path.basename = path.basename.replace('.es6', '');
    }))
    .pipe(gulp.dest('devTemp'));
    browserSync({
        server: {
            baseDir: 'devTemp'
        }
    });
    gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'devTemp'}, reload);
});