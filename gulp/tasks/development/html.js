var gulp        = require('gulp');
var $ = require('gulp-load-plugins')();

// Scan your HTML for assets & optimize them
gulp.task('html', ['critical'], function() {
  return gulp.src('.tmp/index-crs.html')
    // .pipe($.useref({
    //   searchPath: '{.tmp,src}',
    //   noAssets: true
    // }))

    // Minify any HTML
    .pipe($.if('*.html', $.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: true
    })))
    // Output files
    .pipe($.if('*.html', $.size({title: 'html', showFiles: true})))
    .pipe($.rename("index.html"))
    .pipe(gulp.dest('dist/'));
});
