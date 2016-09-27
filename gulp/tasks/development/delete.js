var gulp   = require('gulp');
var del    = require('del');
var config = require('../../config').delete;

/**
 * Delete folders and files
 */
gulp.task('delete', function() {
  del(config.src);
});

gulp.task('clean', function() {
  del(['.tmp', 'dist/*', '!views/'], {dot: true});
});
