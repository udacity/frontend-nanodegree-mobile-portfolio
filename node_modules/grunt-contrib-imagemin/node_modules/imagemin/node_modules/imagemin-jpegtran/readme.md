# imagemin-jpegtran [![Build Status](http://img.shields.io/travis/imagemin/imagemin-jpegtran.svg?style=flat)](https://travis-ci.org/imagemin/imagemin-jpegtran) [![Build status](https://ci.appveyor.com/api/projects/status/rwf4by6qcbne1qet?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/imagemin-jpegtran)

> jpegtran imagemin plugin


## Install

```
$ npm install --save imagemin-jpegtran
```


## Usage

```js
var Imagemin = require('imagemin');
var imageminJpegtran = require('imagemin-jpegtran');

new Imagemin()
	.src('images/*.jpg')
	.dest('build/images')
	.use(imageminJpegtran({progressive: true}))
	.run();
```

You can also use this plugin with [gulp](http://gulpjs.com):

```js
var gulp = require('gulp');
var imageminJpegtran = require('imagemin-jpegtran');

gulp.task('default', function () {
	return gulp.src('images/*.jpg')
		.pipe(imageminJpegtran({progressive: true})())
		.pipe(gulp.dest('build/images'));
});
```


## API

### imageminJpegtran(options)

#### options.progressive

Type: `boolean`  
Default: `false`

Lossless conversion to progressive.

#### options.arithmetic

Type: `boolean`  
Default: `false`

Use [arithmetic coding](http://en.wikipedia.org/wiki/Arithmetic_coding).


## License

MIT © [imagemin](https://github.com/imagemin)
