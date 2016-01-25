/**
  *
  * Load grunt tasks require(‘load-grunt-tasks’)(grunt);
  * Grunt configuration grunt.initConfig({ pagespeed: { options: { nokey: true, locale: “en_G B”, threshold: 40 }, local: { options: { strategy: “desktop” } }, mobile: { options: { strategy: “mobile” } } } });
  * Register customer task for ngrok grunt.registerTask(‘psi-ngrok’, ‘Run pagespeed with ngrok’, function() { var done = this.async(); var port = 8000;
  * Register default tasks grunt.registerTask(‘default’, [‘psi-ngrok’]); };
  *
  */
'use strict'

var ngrok = require('ngrok');

module.exports = function(grunt) {

  //Load grunt tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({
    pagespeed: {
      options: {
        nokey: true,
        locale: "en_GB",
        threshold: 40
      },
      local: {
        options: {
          strategy: "desktop"
        }
      },
      mobile: {
        options: {
          strategy: "mobile"
        }
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //Register customer task for ngrok
  grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() { 
    var done = this.async(); 
    var port = 8000;

    ngrok.connect(port, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.config.set('pagespeed.options.url', url);
      grunt.task.run('pagespeed');
      done();
    });   
  });

  // Register default tasks 
  grunt.registerTask('default', ['psi-ngrok']); 
};

