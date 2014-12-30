## Website Performance Optimization Project

- [Web site live view](http://ripley6811.github.io/frontend-nanodegree-mobile-portfolio/)
- [PageSpeed Insights setup](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fripley6811.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F&tab=desktop)
- [Github repo](https://github.com/Ripley6811/frontend-nanodegree-mobile-portfolio/tree/gh-pages)
    - Note: The final project is in gh-pages branch, ***not*** the master branch.
- [Code Documentation](http://ripley6811.github.io/frontend-nanodegree-mobile-portfolio/doc/global.html)

### Changes to index.html and assets.

- **analytics.js** changed to *async* loading.
- **Images** changed to webp format and created thumbnails. 
    - Resource: http://image.online-convert.com/convert-to-webp
- **`srcset` attribute** used to offer JPEG image if the browser does not support WebP.
    - Resource: http://www.html5rocks.com/en/tutorials/responsive/picture-element/#toc-file-type
- **print.css** added media="print" to restrict loading to when necessary.
- **@font-face**: Took the @font-face css sections for "*latin*" only from google api css and put it in local style.css.
    - Resource: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization
    - Resource: http://fonts.googleapis.com/css?family=Open+Sans:400,700


### Changes to pizza.html and assets.

- **Random ingredient** functions consolidated. Repeated code placed in function `selectRandom`.
    - `selectRandom` takes one parameter ("meats", "nonMeats", etc.) and returns a randomizer function.
- **Change pizza sizes** function now uses a global variable that stores the pizza div elements instead of repeated document queries.
    - `var dx` and `var newwdith` calculations removed from loop.
- **Timing API** removed from code because it is not necessary for web site performance.
- **Pizza movement** changed from editing `elem.style.left` positioning to editing `elem.style.transform: translateX`.
    - Resource: https://docs.google.com/presentation/d/19R_E5B__kdE55L1bTpS6IFKbYbHq-PQKKky4do5Yc6A/edit#slide=id.ge7672e82_064
    - `elem.style.basicLeft` became unnecessary because `elem.style.left` no longer changes.
- **Request animation frame** implemented.
    - Resource: http://www.html5rocks.com/en/tutorials/speed/animations/
    - `onScroll` function added that limits the calls to rAF.
- **Global list variables** used to store pizza elements and eliminate most document queries.
    - `var items` moved to global.
    - Global `var pizzasDiv`, `var pizzaContainer`, and `var pizzas` created for storing DOM elements.


### Grunt task automation used

- **Minified css** with Grunt.
    - Resource: https://www.youtube.com/watch?v=MK_UhwymsvU
    - Resource: https://github.com/gruntjs/grunt-contrib-cssmin/issues/83
        - Learned how to prevent concatenation problem when re-minifying css.
- **Minified js** with Grunt but used the **cssmin** *files* format for multiple directories.
    - Resource: http://gruntjs.com/sample-gruntfile
- **Grunt Watch** for minifying js and css when files changed.
    - Resource: http://24ways.org/2013/grunt-is-not-weird-and-hard/
- **Grunt JSDoc** added for automating documentation (also added `watch` plugin).
    - Resource: https://github.com/krampstudio/grunt-jsdoc/blob/master/Gruntfile.js
        - Learned how to use Docstrap with themes.
        
### Other Resources and Tools

- **Brackets** for html, css, and js editing: http://brackets.io/
    - JSDoc style block comment plugin: https://github.com/wikunia/brackets-funcdocr
    - Block comment plugin: https://github.com/peterflynn/reasonable-comments
- **Dillinger** for markdown editing: http://dillinger.io/