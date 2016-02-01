frontend-nanodegree-mobile-portfolio
====================================

## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

#step for Website Performance Optimization

###collaborative optimization
##Jiar Manosalva

#Optimizing the CRP

1. Async javascript
1. window.onload event

  ```bash
  asynchronousJS
  <script src="analytics.js" async ></script>
  ```
1. validate cached response

  ```bash
  <img src="img/control.png" class="center" cache-control="HTTP">
  ```
1. minimize css, js
1. minimizing gzip

1. Proect structure for Front end project


  ```bash
  $> git init
  $> ls -a
  $> touch README.md
  $> subl README.md
  $> touch .gitignore
  $> subl
  ```
1. Edit .gitignore

  ```bash
  node_modules/
  bower_components/
  .DS_store
  .sass_cache
  .env
  dist
  *debug.log
  ```

  ```bash
  $> npm install async
  $> touch package.json
  $> touch bower.json
  $> npm install --save-dev gulp
  $> mkdir src
  $> mkdir src/scripts src/styles
  $> touch src/index.html src/scripts/app.js  src/styles/main.css
  $> open src/index.html
  $> touch gulpfile.js
  $> gulp hello
  $> npm install --save-dev browser-sync gulp-uglify gulp-minify-css
     gulp-html-replace gulp-sourcemaps
  ```
1. Edit package.json

  ```bash
  {
    "name": "project_name",
    "version": "0.0.1",
    "description": "optimizing project",
    "author": {
      "name": "Jair Manosalva",
      "email": "yayomanosalva@gmail.com"
    },
    "script": {
      "start": "npm install && gulp"
    },
    "dependencies": {
      "async": "^1.5.2"
    },
    "devDependencies": {
      "axios": "^0.8.1",
      "browser-sync": "^2.11.1",
      "gulp": "^3.9.0",
      "gulp-uglify": "^1.5.1"
    }
  }
  ```

1. Edit gulpfile.js

  ```bash
  var gulp = require('gulp');
  var browserSync = require('browser-sync').create();
  var reload = browserSync.reload;
  var uglify = require('gulp-uglify');
  var concat = require('gulp-concat');
  var minifyCSS = require('gulp-minify-css');
  var replace =  require('gulp-html-replace');
  var sourcemap = require('gulp-sourcemap');

  gulp.task('content', function(){
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(reload({stream: true}))
  });

  gulp.task('script', function(){
    gulp.src('./src/srcipts/*.js')
      .pipe(sourcemap.init())
        .pipe(uglify())
        .pipe(concat('app.js'))
      .pipe(sourcemap.write())
      .pipe(gulp.dest('./dist/scripts'))
      .pipe(reload({stream: true}))
  });

  gulp.task('styles', function(){
    gulp.src('./src/styles/*.js')
      .pipe(uglifyCSS())
        .pipe(gulp.dest('./dist/styles'))
  });

  gulp.task('serve', function(){
    browserSync.init(){
        serve: {
          baseDir: './dist/'
        }
    }
    gulp.watch('./src/index.html', ['content']);
    gulp.watch('./src/scripts/*.js', ['scripts']);
    gulp.watch('./src/styles', ['styles']);
  }
  ```

1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt or gulp and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

