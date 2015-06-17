/*global afterEach,beforeEach,it*/
'use strict';

var assert = require('assert');
var execFile = require('child_process').execFile;
var fs = require('fs');
var path = require('path');
var BinBuild = require('bin-build');
var binCheck = require('bin-check');
var compareSize = require('compare-size');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var tmp = path.join(__dirname, 'tmp');

beforeEach(function () {
	mkdirp.sync(tmp);
});

afterEach(function () {
	rimraf.sync(tmp);
});

it('rebuild the jpegtran binaries', function (cb) {
	var cfg = [
		'./configure --disable-shared',
		'--prefix="' + tmp + '" --bindir="' + tmp + '"'
	].join(' ');

	if (process.platform === 'darwin' && process.arch === 'x64') {
		cfg = 'CFLAGS="-m32" LDFLAGS="-m32" ' + cfg;
	}

	new BinBuild()
		.src('http://downloads.sourceforge.net/project/libjpeg-turbo/1.4.0/libjpeg-turbo-1.4.0.tar.gz')
		.cmd(cfg)
		.cmd('make install')
		.run(function (err) {
			assert(!err);
			assert(fs.statSync(path.join(tmp, 'jpegtran')).isFile());
			cb();
		});
});

it('return path to binary and verify that it is working', function (cb) {
	var args = [
		'-outfile', path.join(tmp, 'test.jpg'),
		path.join(__dirname, 'fixtures/test.jpg')
	];

	binCheck(require('../'), args, function (err, works) {
		assert(!err);
		assert(works);
		cb();
	});
});

it('minify a JPG', function (cb) {
	var src = path.join(__dirname, 'fixtures/test.jpg');
	var dest = path.join(tmp, 'test.jpg');
	var args = [
		'-outfile', dest,
		src
	];

	execFile(require('../'), args, function (err) {
		assert(!err);

		compareSize(src, dest, function (err, res) {
			assert(!err);
			assert(res[dest] < res[src]);
			cb();
		});
	});
});
