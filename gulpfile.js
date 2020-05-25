const gulp = require('gulp');
const minifyCSS = require('gulp-csso');
const through2 = require('through2');
const minimist = require('minimist');
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
    const argv = minimist(process.argv.slice(2));
    return gulp.src('src/js/*.js')
        .pipe(argv.type === 'production' ? uglify() : through2.obj(
            (chunk, enc, cb) => cb(null, chunk)))
        .pipe(gulp.dest('dist/js'));
}

function watch(cb) {
    gulp.watch('src/js/**/*.js', js);
    gulp.watch('src/*.html', html);
    gulp.watch('src/css/**/*.css', css);
}

exports.default = gulp.parallel(html, css, js);
exports.start = gulp.series(gulp.parallel(html, css, js), watch);