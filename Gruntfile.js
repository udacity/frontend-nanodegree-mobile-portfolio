'use strict'

var ngrok = require('ngrok');

module.exports = function(grunt) {

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);
  // Grunt configuration
  grunt.initConfig({

    minifyHtml: {
      dist: {
        files: {
          'index.html': 'src/html/index.html'
        }
      }
    },
    uglify: {
      dev: {
        files: {
          'js/perfmatters.min.js': ['src/js/perfmatters.js']
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },
    responsive_images: {
      main: {
        options: {
          sizes: [{
            name: 'opt',
            width: '100%',
            quality: 35
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'src/img/',
          dest: 'img/'
        }]
      },
      pizzapic: {
        options: {
          sizes: [{
            name: 'opt3',
            width: '100px',
            quality: 25
          }]
        },
        files: [{
          expand: true,
          src: ['pizzeria*.{gif,jpg,png}'],
          cwd: 'src/img/',
          dest: 'img/'
        }]
      },
    },
    clean: {
      dev: {
        src: ['img/*.{gif,jpg,png}'],
      },
    },
    copy: {
      pizza: {
        files: [{
          expand: true,
          src: ['img/pizzeria-opt.jpg', 'img_src/pizza.png'],
          dest: 'views/images',
          flatten: true,
        }]
      },
    },
    pagespeed: {
      options: {
        nokey: true,
        locale: "en_GB",
        threshold: 90
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
    }
  });
  // Register customer task for ngrok
  grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function(strategy) {
    var done = this.async();
    var port = 3000;

    ngrok.connect(port, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }

      grunt.config.set('pagespeed.options.url', url);
      grunt.task.run('pagespeed:' + strategy);
      done();
    });
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Register default tasks
  grunt.registerTask('psi-desktop', ['psi-ngrok:local']);
  grunt.registerTask('psi-mobile', ['psi-ngrok:mobile']);
  // run grunt to build optimized assets
  grunt.registerTask('default', ['clean', 'cssmin', 'uglify','minifyHtml','responsive_images:main', 'responsive_images:pizzapic', 'copy']);
}
