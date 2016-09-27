var gulp = require('gulp');

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {

  // gulp.watch('src/js/*.js').on('change', bs.reload);
  // gulp.watch('src/css/*.css', ['minify-css']);
  // gulp.watch('./*.html').on('change', bs.reload);
});
