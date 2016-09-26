var src               = 'src';
var dist              = 'dist';
var public            = 'public';
// var production        = 'build/production';
// var srcAssets         = 'app/_assets';
var developmentImages = 'dist/images';
var developmentStyles = 'dist/styles';
var mainPic = 'src/images/main/christian_acuna.jpg';
var portfolioImages = 'src/images/*.{jpg,png}';
var javascript = 'src/js/*.js';
var css = 'src/css/*.css';
// var productionAssets  = 'build/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: './'
      },
      files: [
        src + '/css/*.css',
        src + '/js/*.js',
        'index.html'
      ]
    }
  },
  delete: {
    src: [developmentImages, developmentStyles]
  },
  images: {
    me: mainPic,
    imageConfig: {
      // Convert all images to JPEG format
      '*': [{
        width: 350,
        rename: {
          extname: '.jpg',
        },
      }, {
        width: 350 * 2,
        rename: {
          suffix: '@2x',
          extname: '.jpg',
        },
      }, {
        width: 350,
        rename: {
          extname: '.webp'
        },
      }, {
        width: 350 * 2,
        rename: {
          suffix: '@2x',
          extname: '.webp',
        },
      }],
    },
    imageFolder: developmentImages,
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
