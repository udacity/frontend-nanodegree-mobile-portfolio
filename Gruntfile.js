module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
        	target: {
			    files: {
			        'js/googleAnalytics.min.js': ['js/googleAnalytics.js'],
			        'js/perfmatters.min.js': ['js/perfmatters.js'],
			        'views/js/belowTheFold.min.js': ['views/js/belowTheFold.js'],
			        'views/js/main.min.js': ['views/js/main.js']
			    }
			}
		},

		imagemin: {
		    dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'img/src',
		            src: ['**/*.{png,jpg,gif}'],
		            dest: 'img/conformed/'
		        }]
		    }
		},

		imagemin: {
		    dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'views/images/src',
		            src: ['**/*.{png,jpg,gif}'],
		            dest: 'views/images/conformed/'
		        }]
		    }
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
		    	roundingPrecision: -1
		  	},
		  	target: {
		    	files: {
		      		'css/media.min.css': ['css/media.css'],
		      		'css/print.min.css': ['css/print.css'],
		      		'css/inline_style.min.css': ['css/inline_style.css'],
		      		'views/css/inline_style.min.css': ['views/css/inline_style.css']
		    	}
			}
		},

		htmlmin: {                                     // Task 
		    dist: {                                      // Target 
		    	options: {                                 // Target options 
		    		removeComments: true,
		        	collapseWhitespace: true
		      	},
		    	files: {                                   // Dictionary of files 
		        	'index.html': 'src/index.html',     // 'destination': 'source' 
		        	'views/pizza.html': 'views/src/pizza.html',
		        	'project-webperf.html': 'src/project-webperf.html',
		        	'project-mobile.html': 'src/project-mobile.html',
		        	'project-2048.html': 'src/project-2048.html'
		      	}
		    }
	    }

    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');


    grunt.registerTask('default', ['uglify', 'imagemin', 'cssmin', 'htmlmin']);

};