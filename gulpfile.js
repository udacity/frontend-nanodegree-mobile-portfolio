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
var responsive = require('gulp-responsive-images');
var imageTempDir = 'dist-image-temp-dir';
var lazypipe = require('lazypipe');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('css', function() {
  return gulp.src(['src/css/*.css', 'src/views/css/*.css'], {base: "src/"})
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('clean:dist', function(){
  return del.sync('dist');
});

gulp.task('clean:dist-image-temp-task', function(){
  return del.sync(imageTempDir);
});

gulp.task('cache:clear', function (callback) {
  return cache.clearAll(callback)
});

gulp.task('build', function(callback){
  runSequence(['clean:dist'], ['responsive-images', 'css'], ['images', 'useref'], ['clean:dist-image-temp-task']);
})

gulp.task('watch', function(){
  runSequence(['browserSync'], ['build']);
 gulp.watch('src/css/*.css', ['css']);
  gulp.watch('src/views/css/*.css', ['css']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/*.js', browserSync.reload);
  // Other watchers
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
})

gulp.task('useref', function(){
  return gulp.src(['src/*.html', 'src/views/*.html'], {base: "src/"})
    .pipe(useref({}, lazypipe().pipe(sourcemaps.init, { loadMaps: true })))
    .pipe(sourcemaps.write('maps'))

    // Minifies only if it's a Html file
    //.pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true, removeComments: false})))

    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))

    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))

    .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
  return gulp.src(imageTempDir+'/**/*.+(png|jpg|gif|svg)', {base: imageTempDir+"/"})
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('dist'));
});

gulp.task('responsive-images', function(){
  return gulp.src('src/**/*.+(png|jpg|gif|svg)', {base: "src/"})
  .pipe(responsive({
    '**/*.*': [{},{
      width: 100,
      suffix: '-100'
    }, {
      width: 100 * 2,
      suffix: '-100-2x'
    }, {
      width: 100 * 3,
      suffix: '-100-3x'
    }, {
      width: 100 * 4,
      suffix: '-100-4x'
    }]
  }))
  .pipe(gulp.dest(imageTempDir))
});