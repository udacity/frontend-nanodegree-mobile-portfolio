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


####Part 1: Optimize PageSpeed Insights score for index.html

![WebPageTest](https://cloud.githubusercontent.com/assets/7112158/18868400/a8ae3d4c-84da-11e6-8964-0c3d711fecf2.png)

![PageSpeed](https://cloud.githubusercontent.com/assets/7112158/18868489/f91960a4-84da-11e6-9e14-de139249e495.png)

Site is hosted on:

`https://christian-acuna.github.io/frontend-nanodegree-mobile-portfolio/`


####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).
