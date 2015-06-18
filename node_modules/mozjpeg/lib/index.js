'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');
var url = 'https://raw.github.com/imagemin/mozjpeg-bin/' + pkg.version + '/vendor/';

module.exports = new BinWrapper()
	.src(url + 'osx/cjpeg', 'darwin')
	.src(url + 'linux/cjpeg', 'linux')
	.src(url + 'win/cjpeg.exe', 'win32')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'cjpeg.exe' : 'cjpeg');
