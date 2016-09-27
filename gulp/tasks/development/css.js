var gulp        = require('gulp');
var config      = require('../../config').styles;
var csslint = require('gulp-csslint');
var cleanCSS = require('gulp-clean-css');
csslint.addFormatter('csslint-stylish');
var $ = require('gulp-load-plugins')();
var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

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

gulp.task('styles', function() {

  return gulp.src(['src/css/*.css'])
    .pipe($.newer('.tmp/styles'))
    .pipe($.sourcemaps.init())
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('.tmp/styles'))
    // Concatenate and minify styles
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.size({title: 'styles'}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/styles'));
});
