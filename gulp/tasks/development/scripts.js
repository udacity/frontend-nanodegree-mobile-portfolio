var gulp        = require('gulp');
var config      = require('../../config').javascript;
var $ = require('gulp-load-plugins')();

gulp.task('scripts', function() {
  gulp.src(config.js)
    .pipe($.plumber())
    .pipe($.uglify())
    .pipe($.rename('app.min.js'))
    .pipe(gulp.dest('dist/js'));
});
