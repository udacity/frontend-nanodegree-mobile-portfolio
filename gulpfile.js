var gulp = require('gulp'),
    gls = require('gulp-live-server'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    htmlmin = require('gulp-htmlmin')
    replace = require('gulp-html-replace')
    rename = require('gulp-rename');

gulp.task('start', ['scripts', 'styles','html']);

gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(rename(function(path) {
      path.dirname += "/js";
      path.basename += ".min";
      path.extname = ".js"
    }))
    .pipe(gulp.dest('./dist'));

    gulp.src('src/views/js/*.js')
      .pipe(uglify())
      .pipe(rename(function(path) {
        path.dirname += "/views/js";
        path.basename += ".min";
        path.extname = ".js"
      }))
      .pipe(gulp.dest('./dist'));
});

gulp.task('styles', function(){
  gulp.src('src/css/*.css')
    .pipe(csso())
    .pipe(rename(function(path) {
      path.dirname += "/css";
      path.basename += ".min";
      path.extname = ".css";
    }))
    .pipe(gulp.dest('./dist'));

  gulp.src('src/views/css/*.css')
  .pipe(csso())
  .pipe(rename(function(path) {
    path.dirname += "/views/css";
    path.basename += ".min";
    path.extname = ".css"
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('html', function(){
  gulp.src('src/*.html')
    .pipe(replace({
      'css': ['css/style.min.css', 'css/print.min.css'],
      'js': 'js/perfmatters.min.js'
    }))
    .pipe(htmlmin())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));

  gulp.src('src/views/*.html')
    .pipe(replace({
      'css': ['css/style.min.css', 'css/print.min.css'],
      'js': 'js/perfmatters.min.js'
    }))
    .pipe(htmlmin())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/views/'));
});

gulp.task('dev', function(){
  var server = gls.static('src',8000)
  server.start();

  gulp.watch(['src/css/*.css', 'src/*.html'], function (file) {
    server.notify.apply(server, [file]);
  });
});

gulp.task('serve', function(){
  var server = gls.static('dist',8000)
  server.start();
});
