module.exports = function(grunt) {
grunt.initConfig({
  imagemin: {
    png: {
      options: {
        optimizationLevel: 7
      },
      files: [
        {
          expand: true,
          cwd: 'views/images/', //current working directory
          src: ['**/*.png'],
          dest: 'views/images/compressed/',  // destination -- will be created
          ext: '.png'
        }
      ]
    },
    jpg: {
      options: {
        progressive: true
      },
      files: [
        {
          expand: true,
          cwd: 'views/images/',
          src: ['**/*.jpg'],
          dest: 'views/images/compressed/',
          ext: '.jpg'
        }
      ]
    }
  },
  uglify: {
            js: {
                src: 'js/perfmatters.js',
                dest: 'js/perfmatters.min.js'
                }
  },
  cssmin: {
            css: {
                src: 'css/print.css',
                dest: 'css/print.min.css'
                }
  }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('builds', ['imagemin','uglify','cssmin']);
};