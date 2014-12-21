module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/perfmatters.js',
        dest: 'js/perfmatters.min.js'
      }
    },
    // Minify css with cssmin plugin. (https://github.com/gruntjs/grunt-contrib-cssmin)
    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'css/',
          // Exclude previous "min" files in order to overwrite them.
          src: ['*.css','!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // Load the plugin that provides the css minification task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify','cssmin']);

};