module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      myTask: {
        options: {
          sizes: [{
            width: 50,
            height: 50,
            quality: 50
          },{
            name: 'largex',
            width: 640
          },{
            name: "large",
            width: 1024,
            suffix: "_x2",
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['views/images/**.{jpg,gif,png}'],
          cwd: 'test/',
          dest: 'tmp/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);
}
