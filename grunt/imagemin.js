module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['img/*.{png,jpg,gif}'],
            dest: 'dist/'
        }]
    }
};