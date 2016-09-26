var gulp        = require('gulp');
var config      = require('../../config').styles;
var csslint = require('gulp-csslint');
var cleanCSS = require('gulp-clean-css');
csslint.addFormatter('csslint-stylish');
var $ = require('gulp-load-plugins')();

gulp.task('lint', function() {
  gulp.src(config.css)
    .pipe(csslint({
      'shorthand': false
    }))
    .pipe(csslint.formatter('stylish'));
});

gulp.task('minify-css', function() {
  return gulp.src(config.css)
    .pipe($.plumber())
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css'));
  // .pipe(bs.stream());
});
