const gulp = require('gulp');
const minifyCSS = require('gulp-csso');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');

function html(cb) {
    return gulp.src('src/*.html')
	    .pipe(gulp.dest('dist'));
}

function css(cb) {
    return gulp.src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
}

function js(cb) {
    // for production, run `--type production`
   return gulp.src('src/js/*.js')
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(gulp.dest('dist/js'));
}

function watch(cb) {
    gulp.watch('src/js/**/*.js', js);
    gulp.watch('src/*.html', html);
    gulp.watch('src/css/**/*.css', css);
}

exports.default = gulp.parallel(html, css, js);
exports.start = gulp.series(gulp.parallel(html, css, js), watch);