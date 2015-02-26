module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: [
                'Gruntfile.js',
                'js/perfmatters.js',
                'views/js/main.js'
            ],
            options: {
                globals: {}
            }
        },
        uglify: {
            dist: {
                files: {
                    'build/js/perfmatters.min.js': ['src/js/perfmatters.js'],
                    'build/views/js/main.min.js': ['src/views/js/main.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css/',
                    src: 'style.css',
                    dest: 'build/css/',
                    ext: '.min.css'
                }, {
                    expand: true,
                    cwd: 'src/css/',
                    src: 'print.css',
                    dest: 'build/css/',
                    ext: '.min.css'
                }, {
                    'build/views/css/pizza.min.css': ['src/views/css/bootstrap-grid.css', 'src/views/css/style.css']
                }],
                options: {
                    keepSpecialComments: 0
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
                'build/index.html': 'src/index.html',
                'build/project-2048.html': 'src/project-2048.html',
                'build/views/pizza.html': 'src/views/pizza.html'    // 'destination': 'source'
              }
            }
          }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['jshint', 'cssmin', 'uglify', 'htmlmin']);
};



