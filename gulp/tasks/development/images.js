var gulp        = require('gulp');
var config      = require('../../config').images;
// var responsive = require('gulp-responsive');

var $ = require('gulp-load-plugins')();

gulp.task('images:main', function() {
  return gulp.src(config.me)
    .pipe($.responsive(config.imageConfig))
    .pipe(gulp.dest(config.imageFolder));
});

gulp.task('images:portfolio', function() {
  return gulp.src(config.portImages)
    .pipe($.responsive(config.portImagesConfig))
    .pipe(gulp.dest(config.imageFolder));
});
