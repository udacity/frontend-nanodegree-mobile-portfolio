var gulp = require('gulp'),
	minifyHTML = require('gulp-htmlmin'),
	critical = require('critical'),
	del = require('del'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	jpegtran = require('imagemin-jpegtran'),
	imageresize = require('gulp-image-resize');

//Inline CSS into HTML file and place it in a tmp folder
gulp.task('critical', function (cb) {
	critical.generate({
		base: 'src/',
		src: 'index.html',
		css: ['src/css/style.css'],
		dest: 'tmp/index.html',
		minify: true,
		extract: false,
		inline: true
	})
});

//Minify HTML files in src & tmp folder to dist folder 
gulp.task('minifyHTML', function(){
	gulp.src(['!src/index.html','tmp/index.html','src/**/*.html'])
		.pipe(minifyHTML({collapseWhitespace: true}))
    	.pipe(gulp.dest('dist'));
});

//Delete tmp folder
gulp.task('del',function(){
	del('tmp');
})

//Minify CSS and place it in dist folder
gulp.task('minifyCSS', function(){
	gulp.src('src/**/*.css')
		.pipe(cssnano())
		.pipe(gulp.dest('dist'))
});

//Uglify Java script file and place it in dist folder
gulp.task('uglifyJS', function(){
	gulp.src('src/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'));

});

//imagemin and pngquant plugin
gulp.task('imagemin', function(){
	return gulp.src(['src/img/*.*'])
		.pipe(imagemin({
			progressive: true,
			use: [pngquant(),jpegtran()] 
		}))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('imagemin1', function(){
	return gulp.src(['src/views/images/*.*'])
		.pipe(imageresize({
			width:100,
			height:75
		}))
		.pipe(imagemin({
			progressive: true,
			use: [jpegtran(),pngquant()] 
		}))
		.pipe(gulp.dest('dist/views/images'));
});

gulp.task('default',['critical']);