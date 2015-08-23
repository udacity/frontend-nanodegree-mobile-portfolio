# decompress-unzip [![Build Status](http://img.shields.io/travis/kevva/decompress-unzip.svg?style=flat)](https://travis-ci.org/kevva/decompress-unzip)

> zip decompress plugin


## Install

```
$ npm install --save decompress-unzip
```


## Usage

```js
var Decompress = require('decompress');
var decompressUnzip = require('decompress-unzip');

new Decompress()
	.src('foo.zip')
	.dest('dest')
	.use(decompressUnzip({strip: 1}))
	.run();
```

You can also use this plugin with [gulp](http://gulpjs.com):

```js
var decompressUnzip = require('decompress-unzip');
var gulp = require('gulp');
var vinylAssign = require('vinyl-assign');

gulp.task('default', function () {
	return gulp.src('foo.zip')
		.pipe(vinylAssign({extract: true}))
		.pipe(decompressUnzip({strip: 1}))
		.pipe(gulp.dest('dest'));
});
```


## API

### decompressUnzip(options)

#### options.strip

Type: `number`  
Default: `0`

Remove leading directory components from extracted files.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
