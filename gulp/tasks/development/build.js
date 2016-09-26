var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
  runSequence('delete',
  [
    'images:main',
    'images:portfolio',
    'lint',
    'minify-css'
  ],
  callback);
});
