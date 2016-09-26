var gulp  = require('gulp');
var critical = require('critical').stream;

// Generate & Inline Critical-path CSS
gulp.task('critical', function() {
  return gulp.src('index.html')
      .pipe(critical({base: 'dist/',
      inline: true,
      css: ['dist/styles/style.css'],
      minify: true}))
      .pipe(gulp.dest('dist'));
});
