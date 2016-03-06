// Master Grunt Gruntfile.js
// Author: Guillaume Simler (for more info please check my Github Profile)
// Configured in March 2013


module.exports = function(grunt) {

    // 1. configuration starts here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 2. add your plug-ins' config here below

        // Minify  css

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
        },

        // inline CSS

        inlinecss: {
            main: {
                options: {
                },
                files: {
                'index.html': 'index-dev.html'
                }
            }
        },

        // Minify HTML

        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
                },
          
                // Dictionary of files
                files: {                                   
                    'index.html': 'index.html'        // 'destination': 'source'
                }
            }
        }
      
    });

    // 3. load your plug-ins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-inline-css');

    // 4. progran starter (don't forget to add the plugin)
    grunt.registerTask('default', ['cssmin','htmlmin']);

};