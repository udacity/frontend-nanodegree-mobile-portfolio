var gulp = require('gulp');
var gzip = require('gulp-gzip');

gulp.task('compress', function() {
  gulp.src('index-min.html')
  .pipe(gzip())
  .pipe(gulp.dest('./'));
});
