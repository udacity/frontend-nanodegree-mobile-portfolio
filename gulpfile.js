var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var del = require('del');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('css', function() {
  return gulp.src(['app/css/*.css', 'app/views/css/*.css'], {base: "app/"})
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('clean:dist', function(){
  return del.sync('dist');
});

// gulp.task('clean:css-min', function(){
//   return del.sync('app/css-min');
// });

// gulp.task('cache:clear', function (callback) {
//   return cache.clearAll(callback)
// });

gulp.task('build', function(callback){
  runSequence(['clean:dist'], ['images', 'css'], ['useref']);
})

gulp.task('watch', function(){
  runSequence(['browserSync'], ['build']);
  // gulp.watch('app/css/*.css', ['minify-css']);
  // gulp.watch('app/views/css/*.css', ['minify-css']);
  // gulp.watch('app/css/*.css', ['useref']);
  // gulp.watch('app/views/css/*.css', ['useref']);
  gulp.watch('app/css/*.css', ['css']);
  gulp.watch('app/views/css/*.css', ['css']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
  // Other watchers
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('useref', function(){
  return gulp.src('app/*.html', {base: "app/"})
    .pipe(useref())

    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))

    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))

    .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
  return gulp.src('app/**/*.+(png|jpg|gif|svg)', {base: "app/"})
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('dist'))
});
