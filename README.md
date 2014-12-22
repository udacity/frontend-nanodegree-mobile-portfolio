## Website Performance Optimization portfolio project

- Web site: http://ripley6811.github.io/frontend-nanodegree-mobile-portfolio/

- PageSpeed Insights is https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fripley6811.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F&tab=desktop

- Github repo: https://github.com/Ripley6811/frontend-nanodegree-mobile-portfolio/tree/gh-pages

### Changes

- Analytics changed to async loading.
- Created webp images and thumbnails. (Resource: http://image.online-convert.com/convert-to-webp)
- media="print" added to print.css loading.
- (https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)
- Took the @font-face css sections for "latin" only from "http://fonts.googleapis.com/css?family=Open+Sans:400,700" and put it in style.css. (Resource: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)
- Learned about Grunt and minifying css with "https://www.youtube.com/watch?v=MK_UhwymsvU".
- Looked at "https://github.com/gruntjs/grunt-contrib-cssmin/issues/83" to solve a bug in cssmin plugin for Grunt.

- Consolidated repeated code in ingredient randomizer.