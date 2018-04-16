'use strict'

var gulp = require('gulp'),
    uglify = require('gulp-uglify'), //Minify JavaScript using UglifyJS2.
    rename = require('gulp-rename'), //Rename files
    minifyCSS = require('gulp-clean-css'), //Minify CSS using clean-css
    plumber = require('gulp-plumber'), //Prevent pipe breaking caused by errors from gulp plugins
    browserSync = require('browser-sync').create(); //Synchronised browser testing

gulp.task('scripts', function(){
  gulp.src('js/perfmatters.js')
      .pipe(plumber())
      .pipe(uglify())
      .pipe(rename('perfmatters.min.js'))
      .pipe(plumber.stop())
      .pipe(gulp.dest('./build/js/'));
});

gulp.task('styles', function(){
  gulp.src('css/*.css')
      .pipe(plumber())
      .pipe(minifyCSS())
      .pipe(rename(function(path) {
        path.basename += ".min";
        path.extname = ".css"
      }))
      .pipe(plumber.stop())
      .pipe(gulp.dest('./build/css/'));
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['scripts',browserSync.reload]); //Reload browser on change
  gulp.watch('css/*.css', ['styles',browserSync.reload]);
});

gulp.task('default', ['scripts', 'styles', 'browser-sync', 'watch']);