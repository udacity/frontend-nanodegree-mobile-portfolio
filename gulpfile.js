var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var del = require('del');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

gulp.task('minify-css', function() {
  return gulp.src(['css/*.css', 'views/css/*.css'], {base: "./"})
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('clean:dist', function(){
  return del.sync('dist');
});

// gulp.task('cache:clear', function (callback) {
//   return cache.clearAll(callback)
// });

gulp.task('build', function(callback){
  runSequence(['clean:dist'], ['minify-css']);
})

gulp.task('watch', function(){
  runSequence(['browserSync'], ['build']);
  gulp.watch('css/*.css', ['minify-css']);
  gulp.watch('views/css/*.css', ['minify-css']);
  gulp.watch('./*.html', browserSync.reload);
  gulp.watch('js/*.js', browserSync.reload);
  // Other watchers
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  })
})

