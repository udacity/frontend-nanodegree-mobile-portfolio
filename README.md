### Website Performance Optimization portfolio project

#### How to run the application

Simply open index.html in a browser and interact with the pages as you like.

#### Changes made to index.html to achieve PageSpeed score >= 90
* Added async to scripts and moved scripts to the end of body
* Added media query on print.css.
* Minified and inlined CSS.
* Reduced sized of images.

#### Changes made to view/js/main.js to get rid of jank
1. To achieve 60 FPS when scrolling
  * Reduced amount of moving pizzas.
  * Changed querySelectorAll to getElementsByClassName.
  * Moved phase calculation out of the loop.

2. To reduce pizza-resizing time to < 5ms
  * Removed determineDx() and recreated size switcher.
  * Simplified the loop to avoid forced synchronous layout.

3. Other performance optimization
  * Replaced querySelectorAll with getElementsByClassName.
