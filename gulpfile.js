const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// This task will optimize images and place them in dist directory
gulp.task('images', function(){
  gulp.src('./img/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
  gulp.src('./views/images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/views/images'))
});
// This task will implement browser sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});