var gulp = require('gulp'),
    ngrok = require('ngrok'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    htmlmin = require('gulp-htmlmin')
    replace = require('gulp-html-replace')
    rename = require('gulp-rename');

gulp.task('default', ['host','scripts', 'styles','replace', 'html']);

gulp.task('host', function(){
  ngrok.connect(function (err, url) {});
});

gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(rename(function(path) {
      path.dirname += "/js";
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
      path.extname = ".css"
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('html', function(){
  gulp.src('src/*.html')
    .pipe(htmlmin())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('replace', function(){
  gulp.src('src/index.html')
    .pipe(replace({
      'css': ['css/style.min.css', 'css/print.min.css'],
      'js': 'js/perfmatters.min.js'
    }))
  .pipe(gulp.dest('./dist'));
});
