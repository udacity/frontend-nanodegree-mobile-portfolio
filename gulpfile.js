// Requiring packages
var gulp 		= require('gulp');
var browserSync = require('browser-sync').create();

//This task will spin up a server with browser-sync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'frontend-nanodegree-mobile-portfolio'
    },
  })
})

// Now we will watch for changes in the directory so we can 
// update the browser in real time
gulp.task('watch', ['browserSync'], function (){
	gulp.watch('frontend-nanodegree-mobile-portfolio/*.html');
	gulp.watch('frontend-nanodegree-mobile-portfolio/css/*.css');
	gulp.watch('frontend-nanodegree-mobile-portfolio/js/*.js');
	gulp.watch('frontend-nanodegree-mobile-portfolio/views/*.html');
	gulp.watch('frontend-nanodegree-mobile-portfolio/views/css/*.css');
	gulp.watch('frontend-nanodegree-mobile-portfolio/views/js/*.js');
});