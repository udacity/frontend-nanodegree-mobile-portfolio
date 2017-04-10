var src               = 'src';
var dist              = 'dist';
var developmentAssets = 'dist/assets';
var developmentStyles = 'styles';
var pizzaImg = 'views/images/pizzeria.jpg';
var profileImage = 'src/img/profilepic.jpg';
var javascript = 'src/js/*.js';
var css = 'src/css/*.css';
// var productionAssets  = 'build/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [src, dist]
      },
      files: [
        'src/styles/*.css',
        'src/js/*.js',
        'src/index.html',
        'src/views/'
      ]
    }
  },
  delete: {
    src: [developmentAssets, developmentStyles]
  },
  images: {
    pizza: pizzaImg,
    imageConfig: {
      // Convert all images to JPEG format
      '*': [{
        width: 150,
        rename: {
          extname: '.jpg',
        },
      }, {
        width: 150 * 2,
        rename: {
          suffix: '@2x',
          extname: '.jpg',
        },
      }, {
        width: 150,
        rename: {
          extname: '.webp'
        },
      }, {
        width: 150 * 2,
        rename: {
          suffix: '@2x',
          extname: '.webp',
        },
      }],
    },
    imageFolder: developmentAssets,
    profileImagePath: profileImage,
    profileImagesConfig: {
      // Convert all images to JPEG format
      '*': [{
        width: 70,
        rename: {
          extname: '.jpg',
        },
      },{
        width: 70,
        rename: {
          extname: '.webp'
        },
      }],
    },
  },
  javascript: {
    js: javascript
  },
  styles: {
    css: css,

  }
};
