var gulp = require('gulp'); // Require gulp

// Sass dependencies
var sass = require('gulp-sass'); // Compile Sass into CSS
var minifyCSS = require('gulp-minify-css'); // Minify the CSS

// Minification dependencies
var minifyHTML = require('gulp-minify-html'); // Minify HTML
var concat = require('gulp-concat'); // Join all JS files together to save space
var stripDebug = require('gulp-strip-debug'); // Remove debugging stuffs
var uglify = require('gulp-uglify'); // Minify JavaScript
var imagemin = require('gulp-imagemin'); // Minify images

// Other dependencies
var size = require('gulp-size'); // Get the size of the project
var browserSync = require('browser-sync'); // Reload the browser on file changes
var jshint = require('gulp-jshint'); // Debug JS files
var stylish = require('jshint-stylish'); // More stylish debugging

// Tasks -------------------------------------------------------------------- >

// Task to compile Sass file into CSS, and minify CSS into build directory
gulp.task('styles', function() {
  gulp.src('./app/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/styles/'))
    .pipe(browserSync.reload({
      stream: true,
    }));
});

// Task to minify new or changed HTML pages
gulp.task('html', function() {
  gulp.src('./app/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./build/'));
});

// Task to concat, strip debugging and minify JS files
gulp.task('scripts', function() {
  gulp.src(['./app/scripts/lib.js', './app/scripts/*.js'])
    .pipe(concat('script.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts/'));
});

// Task to minify images into build
gulp.task('images', function() {
  gulp.src('./app/images/*')
  .pipe(imagemin({
    progressive: true,
  }))
  .pipe(gulp.dest('./build/images'));
});

// Task to run JS hint
gulp.task('jshint', function() {
  gulp.src('./app/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// Task to get the size of the app project
gulp.task('size', function() {
  gulp.src('./app/**')
	.pipe(size({
    showFiles: true,
  }));
});

// Task to get the size of the build project
gulp.task('build-size', function() {
  gulp.src('./build/**')
  .pipe(size({
    showFiles: true,
  }));
});

// Serve application
gulp.task('serve', ['styles', 'html', 'scripts', 'images', 'jshint', 'size'], function() {
  browserSync.init({
    server: {
      baseDir: 'app',
    },
  });
});

// Run all Gulp tasks and serve application
gulp.task('default', ['serve', 'styles'], function() {
  gulp.watch('app/sass/**/*.scss', ['styles']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/scripts/**/*.js', browserSync.reload);
});