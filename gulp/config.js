var src               = 'src';
var dist              = 'dist';
var public            = 'public';
// var production        = 'build/production';
// var srcAssets         = 'app/_assets';
var developmentAssets = 'assets';
var developmentStyles = 'styles';
var pizzaImg = 'views/images/pizzeria.jpg';
var portfolioImages = 'src/images/*.{jpg,png}';
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
        'src/index.html'
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
    portImages: portfolioImages,
    portImagesConfig: {
      // Convert all images to JPEG format
      '*': [{
        width: 500,
        rename: {
          extname: '.jpg',
        },
      }, {
        width: 500 * 2,
        rename: {
          suffix: '@2x',
          extname: '.jpg',
        },
      }, {
        width: 500 * 3,
        rename: {
          suffix: '@3x',
          extname: '.jpg',
        },
      }, {
        width: 500,
        rename: {
          extname: '.webp'
        },
      }, {
        width: 500 * 2,
        rename: {
          suffix: '@2x',
          extname: '.webp',
        },
      }, {
        width: 500 * 3,
        rename: {
          suffix: '@3x',
          extname: '.webp',
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
