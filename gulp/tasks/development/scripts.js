var gulp        = require('gulp');
var config      = require('../../config').javascript;
var $ = require('gulp-load-plugins')();

gulp.task('scripts', function() {
  gulp.src('./src/js/perfmatters.js')
    .pipe($.plumber())
    .pipe($.uglify())
    .pipe(gulp.dest('dist/js'));
});
