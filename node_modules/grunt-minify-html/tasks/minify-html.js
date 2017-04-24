'use strict';
var fs = require('fs');
var path = require('path');
var eachAsync = require('each-async');
var mkdirp = require('mkdirp');
var Minimize = require('minimize');

module.exports = function (grunt) {
	grunt.registerMultiTask('minifyHtml', 'Minify HTML', function () {
		var done = this.async();
		var options = this.options();

		eachAsync(this.files, function (el, i, next) {
			var minimize = new Minimize(options);
			var src = el.src[0];

			fs.readFile(src, 'utf8', function (err, str) {
				if (err) {
					next(err);
					return;
				}

				minimize.parse(str, function (err, min) {
					if (err) {
						next(err);
						return;
					}

					mkdirp(path.dirname(el.dest), function () {
						if (err) {
							next(err);
							return;
						}

						fs.writeFile(el.dest, min, next);
					});
				});
			});
		}, function (err) {
			if (err) {
				grunt.warn(err);
			}

			done();
		});
	});
};
