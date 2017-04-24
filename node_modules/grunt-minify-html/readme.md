# grunt-minify-html [![Build Status](https://travis-ci.org/sindresorhus/grunt-minify-html.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-minify-html)

> Minify HTML using [minimize](https://github.com/Swaagie/minimize)

*Issues with the output should be reported on the minimize [issue tracker](https://github.com/Swaagie/minimize/issues).*

This differs from [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin) in that it uses a proper [HTML-parser](https://github.com/Moveo/minimize#credits) instead of a [bunch of fragile regexes](https://github.com/kangax/html-minifier/blob/27fce5b5a7c166ea6149fba78a418e475658f075/src/htmlparser.js#L35-L41).


## Install

```
$ npm install --save-dev grunt-minify-html
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	minifyHtml: {
		options: {
			cdata: true
		},
		dist: {
			files: {
				'dist/index.html': 'src/index.html'
			}
		}
	}
});

grunt.registerTask('default', ['minifyHtml']);
```


## Options

See the `minimize` [options](https://github.com/Swaagie/minimize#options).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
