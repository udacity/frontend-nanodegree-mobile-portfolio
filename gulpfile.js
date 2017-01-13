var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var del = require('del');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
  return gulp.src(['css/*.css', 'views/css/*.css'], {base: "./"})
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-html', function() {
  return gulp.src('./*.html', {base: "./"})
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean:dist', function(){
  return del.sync('dist');
});

// gulp.task('cache:clear', function (callback) {
//   return cache.clearAll(callback)
// });

gulp.task('build', function(callback){
  runSequence(['clean:dist'], ['minify-css', 'minify-html']);
})

gulp.task('watch', function(){
  gulp.watch('css/*.css', ['minify-css']);
  gulp.watch('views/css/*.css', ['minify-css']);
  gulp.watch('./*.html', ['minify-html']);
  // Other watchers
})
