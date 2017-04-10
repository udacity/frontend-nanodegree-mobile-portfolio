var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concatify = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    imageop = require('gulp-image-optimization'),
    inject = require('gulp-inject'),
    minifyCSS = require('gulp-minify-css');
    minifyhtml = require('gulp-minify-html');

var paths = {
 scripts: ['scripts/*.js'],
 content: ['index.html', 'ptoject-2048.html', 'project-mobile.html', 'project-webperf.html'], 
 styles: ['frontend-nanodegree-mobile-portfolio/css/.css'],
 images: ['frontend-nanodegree-mobile-portfolio/css/.'],
};

// Concats & minifies js files and outputs them to build/js/app.js 
gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(concatify('perfmatters.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/js/'));
});

// Minifies our HTML files and outputs them to build/*.html
gulp.task('content', function() {
    return gulp.src(paths.content)
        .pipe(minifyhtml({
            empty: true,
            quotes: true
        }))
        .pipe(gulp.dest('./build'));
});

//Minifies CSS
gulp.task('styles', function(){
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./build/css/minCSS'));
});

// Optimizes our image files and outputs them to build/image/*
gulp.task('images', function() {
    return gulp.src(paths.images)
                .pipe(imageop({
                    optimizationLevel: 5
                }))
                .pipe(gulp.dest('./build/image'));
});


gulp.task('default', ['scripts', 'content', 'styles','images']);