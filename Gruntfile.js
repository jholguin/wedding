'use strict';

module.exports = function (grunt) {

	// Load grunt tasks automagically.
	require('load-grunt-config')(grunt, {
		data: {
			paths: {
				src: 'src',
				dist: 'dist'
			}
		}
	});
};