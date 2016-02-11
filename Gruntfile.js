module.exports = function(grunt) {
	grunt.initConfig({



  concat: {
    css: {
      src: ['views/css/bootstrap-grid.css', 'views/css/style.css'],
      dest: 'views/dist/css/combined.css',
    },
  },

  cssmin : {
            css:{
                src: 'views/dist/css/combined.css',
                dest: 'views/dist/css/combined.min.css'
            }
        },
  uglify : {
        js: {
            src: ['views/js/main.js'],
            dest:  'views/dist/js/min.main.js'
        }
    },

 /* watch: {
  js: {
    files: ['js/*.js'],
    tasks: ['concat'],
  },
},
*/

});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', [ 'concat:css', 'cssmin:css', 'uglify:js' ]);

};