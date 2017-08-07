const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

// This task will optimize images and place them in dist directory
gulp.task('images', function(){
  gulp.src('./img/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
});