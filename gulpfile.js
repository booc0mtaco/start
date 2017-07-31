var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');

gulp.task('html', function() {
    return gulp.src('src/*.html')
	    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
	    .pipe(minifyCSS())
	    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
    // for production, run `--type production`
   return gulp.src('src/js/*.js')
	    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
	    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/css/**/*.css', ['css']);
});

gulp.task('default', [ 'html', 'css', 'js']);

gulp.task('start', ['html', 'css', 'js', 'watch']);
