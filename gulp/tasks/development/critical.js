var gulp  = require('gulp');
var critical = require('critical').stream;
var $ = require('gulp-load-plugins')();

// Generate & Inline Critical-path CSS
gulp.task('critical', function() {
  return gulp.src('src/index.html')
      .pipe(critical({base: 'dist/',
      inline: true,
      css: ['dist/styles/style.css'],
      minify: true}))
      .pipe($.rename("index-crs.html"))
      .pipe(gulp.dest('./.tmp'));
});
