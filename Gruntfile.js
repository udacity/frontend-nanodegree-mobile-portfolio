module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
          files: [{ 
              // Minify the index.html javascript file(s).
              expand: true,
              cwd: 'js/',
              src: ['*.js','!*.min.js'],
              dest: 'js/',
              ext: '.min.js'
          },
          { 
              // Minify the pizza.html javascript file(s).
              expand: true,
              cwd: 'views/js/',
              src: ['*.js','!*.min.js'],
              dest: 'views/js/',
              ext: '.min.js'
          }]
      }
    },
    // Minify css with cssmin plugin. (https://github.com/gruntjs/grunt-contrib-cssmin)
    cssmin: {
        my_target: {
            files: [{
                    // Minify the index.html css file(s).
                    expand: true,
                    cwd: 'css/',
                    // Use "!" to exclude previous "min" files in order to overwrite them.
                    src: ['*.css','!*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                },
                {
                    // Minify the pizza.html css file(s).
                    expand: true,
                    cwd: 'views/css/',
                    src: ['*.css','!*.min.css'],
                    dest: 'views/css/',
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