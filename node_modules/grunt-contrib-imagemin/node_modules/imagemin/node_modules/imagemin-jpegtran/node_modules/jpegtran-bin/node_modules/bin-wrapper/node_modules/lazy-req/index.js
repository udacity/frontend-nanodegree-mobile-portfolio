'use strict';
module.exports = function (fn) {
	return function (id) {
		var mod;
		return function () {
			return mod !== undefined ? mod : mod = fn(id);
		};
	};
};
