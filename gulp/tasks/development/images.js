var gulp        = require('gulp');
var config      = require('../../config').images;
// var responsive = require('gulp-responsive');

var $ = require('gulp-load-plugins')();

gulp.task('images:pizza', function() {
  return gulp.src(config.pizza)
    .pipe($.responsive(config.imageConfig))
    .pipe(gulp.dest(config.imageFolder));
});

gulp.task('images:profile', function() {
  return gulp.src(config.profileImagePath)
    .pipe($.responsive(config.profileImagesConfig))
    .pipe(gulp.dest(config.imageFolder));
});
