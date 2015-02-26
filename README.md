## Website Performance Optimization portfolio project

Challenge to optimise the the portfolio for P4 Website Optimisation Module of [Udacity Front-End Web Developer Nanodegree](https://www.udacity.com/course/nd001).

Applying the techniques picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).


###Part 1: Optimize PageSpeed Insights score for index.html

####Target: PageSpeed score of 90 for index.html (both Mobile and Desktop scores should be at least 90)

The pages were tested on a local web server and [ngrok](https://ngrok.com/) used to make the server accessible remotely for testing PageSpeed score.

PageSpeed Score indicated a number of items which needed to be remediated

* Eliminate render-blocking JavaScript and CSS in above-the-fold content
	* Remove render-blocking JavaScript: http://www.google-analytics.com/analytics.js
	* Optimize CSS Delivery of the following:
		* http://fonts.googleapis.com/css?family=Open+Sans:400,700
		* http://7fc90bc.ngrok.com/css/style.css
	* http://7fc90bc.ngrok.com/css/print.css

* Enable compression on http://7fc90bc.ngrok.com/css/style.css

Optimisations completed as follows:

* Mark analytics.js as asyncronous
* Remove print.css from CRP by using media setting
* Inline style.css into html
* Inline Googlefonts into html
* Optimise and resize images appropriately using ImageAlpha and ImageOptim (will be including these in the grunt workflow at some point)
* Implemented a task runner process with grunt to automate the optimisation of files using the following plugins
	* grunt-contrib-uglify
	* grunt-contrib-cssmin
	* grunt-contrib-jshint
	* grunt-contrib-htmlmin
* Other grunt plugins condsidered but not used here yet: grunt-inline, grunt-imageoptim

Included a .htaccess file to change default caching behaviour

####Result: Pagespeed score of 95 when connecting via ngrok to my PC - 99 when serving from my hosted website

![website score](https://github.com/allbad/frontend-nanodegree-mobile-portfolio/raw/gh-pages/screenshots/ss_index_99_at.jpg "Website Score")


###Part 2: Optimize Frames per Second in pizza.html

####Target:

* Time to resize pizza is less than 5ms
	* Resize pizza functionality contained within functions resizePizzas, changeSliderLabel, determineDx, sizeSwitcher and critically in this instance changePizzaSizes
	* The changePizzaSizes function includes multiple DOM queries in a loop, so moved those outside the loop

	![resize time](https://github.com/allbad/frontend-nanodegree-mobile-portfolio/raw/gh-pages/screenshots/ss_pizza_resize.jpg "Resize Time")

* Frame rate of 60fps should be obtained for the pizza page (views/pizza.html)
	* Pizza sliding functionality contained within the eventListener function which on DOMContentLoaded runs the updatePositions function
	* Moved the DOM queries out of the loop to only run it once

	![scroll timeline](https://github.com/allbad/frontend-nanodegree-mobile-portfolio/raw/gh-pages/screenshots/ss_scroll_timeline.jpg "Scroll Timeline")

* Identify and perform optimisations impacting content efficiency
	* Optimised the pizzeria.jpg and pizza.png using ImageAlpha and ImageOptim
	* Used grunt to minify file resources (see above for plugins used) and build an automated optimisation process
	* Included a .htaccess file to change default caching behaviour



