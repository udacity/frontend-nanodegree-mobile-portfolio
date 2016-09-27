## Website Performance Optimization portfolio project

Install
-------
1. Fork or clone repo
2. cd into folder and run `npm i`
3. run `gulp` to launch browsersync server

Gulp
---
Below is a breakdown of the folder structure and files used for Gulp:
```
|- gulp/
      |- development/
      |- browsersync.js
      |- critical.js
      |- css.js
      |- delete.js
      |- html.js
      |- images.js
      |- scripts.js
  |- default.js
  |- config.js
  |- node_modules/
  |- gulpfile.js
  |- package.json

```

Each task is broken into a separate file and config.js serves as the
configuration file for each task.

* `gulp` launches browsersync
* `gulp html` generates and inlines critical-path CSS via `gulp critical` task and minifies index.html, outputting the result in dist folder
* `gulp scripts` uglifies perfmatters.js
* `gulp images:pizza` and `gulp images:profile` generates optimized jpg and webp images
* `gulp clean` cleans dist folder and .tmp

#### Part 1: Optimize PageSpeed Insights score for index.html

![WebPageTest](https://cloud.githubusercontent.com/assets/7112158/18868400/a8ae3d4c-84da-11e6-8964-0c3d711fecf2.png)

![PageSpeed](https://cloud.githubusercontent.com/assets/7112158/18868489/f91960a4-84da-11e6-9e14-de139249e495.png)

Site is hosted on:
[https://christian-acuna.github.io/frontend-nanodegree-mobile-portfolio/](https://christian-acuna.github.io/frontend-nanodegree-mobile-portfolio/)


#### Part 2: Optimize Frames per Second in pizza.html

Changes made to views/js/main.js and views/css/style.css:

1. Optimize changePizzaSizes(size) function
2. Use getElementsByClassName when possible
3. Move `document.body.scrollTop / 1250` out of for loop in `updatePositions()` function
4. added `transform: translateZ(0);` to `.mover` in style.css

![Frame Rate](https://cloud.githubusercontent.com/assets/7112158/18869125/837fde92-84dd-11e6-8259-0f590cad4ec9.png)

Location of pizza.html: `dist/views/pizza.html`
