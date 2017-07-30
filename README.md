
## Website Performance Optimization

In this project the online portfolio <https://github.com/udacity/frontend-nanodegree-mobile-portfolio> has been optimized for speed. In particular, the critical rendering path has been optimized to make this page render as quickly as possible.

#### Initial Performance
- *FPS:* < 25
- *Images' Resize Time:* > 140 ms
- *Google PageSpeed Score for Mobile:* 71/100 <https://developers.google.com/speed/pagespeed/insights/>

#### Performance after Optimization
- *FPS:* >= 60
- *Images' Resize Time:* < 5 ms
- *Google PageSpeed Score for Mobile:* 90/100

### Optimizations Done

#### To achieve required PageSpeed Score
#####  index.html
- Minified and inlined style.css
- Added "media = print" in print.css
- Removed googlefonts API script
- Moved the inline javascript to bottom of body
- Added async to googleanalytics and perfmatters javascripts
- Compressed profile image
- Minified perfmatters javscript

#### To achieve a framerate of 60fps and time to resize pizza to less than 5ms
##### views/js/main.js
- Function changePizzaSizes:
Defines newWidth for different pizza sizes and sets the same according to the size slider bar
Used getElementsByClassName for DOM reference instead of querySelector and moved it out of the loop to improve performance
Removed determineDx and sizeSwitcher function and consolidated their work in changePizzaSizes

- Function updatePositions:
It is called whenever the user scrolls the page, so moved the DOM reference and the repeated calculations outside the for loop
Replaced style.left with style.transform  to achieve better FPS as transform only triggers composite
Added requestAnimationFrame to call updatePositions on windows eventlistener scroll

- DOMContentLoaded event:
Reduced the number of pizzas from 200 to 24
Used getElementById and moved DOM reference outside the loop to improve performance
The elements left property is set here as it was a big performance bottle neck when done in updatePositions function while scrolling.

##### views/css/style.css
- Added will-change and transform:translateZ(0) to mover class to cut down on paint time
