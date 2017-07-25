## Website Performance Optimization portfolio project

This project is the part of Udacity Front-end Web Developer Nanodegree. The requirement for this project is to optimize the online portfolio for speed! 

### Getting started

#### Installing

* To check the page speed score for the page, go to <a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">Google PageSpeed Insights Tool</a> and enter the url <a href="https://madhuni.github.io/frontend-nanodegree-mobile-portfolio/" target="_blank">https://madhuni.github.io/frontend-nanodegree-mobile-portfolio/</a>.

* Run <a href="https://madhuni.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html" target="_blank">https://madhuni.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html</a> Or clone my github repository <a href="https://github.com/madhuni/frontend-nanodegree-mobile-portfolio.git" target="_blank">https://github.com/madhuni/frontend-nanodegree-mobile-portfolio.git</a> in your local machine and load the ```dist/views/pizza.html``` page in the browser. Run the chrome Dev Tool and check the performance of the page.

### Requirements for completing the project

#### Part 1: Optimize PageSpeed Insights score for ```index.html```

##### Goal

- [x] Achieve 90+ page speed score for Mobile.
- [x] Achieve 90+ page speed score for Desktop.

##### Optimization

* Optimize images for index.html
* Minify JS
* Minify CSS
* Minify HTML
* Unblocking CSS for print style With Media Queries
* Using web font loader
* Inlining critical CSS

##### Screenshot of the result achieved

![Screen shot of page speed achieved](/screenshots/page-speed-score.jpg)

#### Part 2: Optimize Frames per Second in pizza.html

##### Goal

- [x] Optimizations made to ```views/js/main.js``` make ```views/pizza.html``` render with a consistent frame-rate at 60fps when scrolling.
- [x] Time to resize pizzas is less than 5 ms using the pizza size slider on the ```views/pizza.html``` page.

##### Optimization

* Reduced the number of images of pizzas to be shown in background.
* Moved the selection of elements with class ```.mover``` outside the function ```updatePositions``` as we only need to select them once.
* Calculation of ```topDistance``` is performed outside of the loop to improve performance by reducing time for 'style' and 'layout' in the pipeline.
* Moved the selection of elements with class ```.randomPizzaContainer``` outside the function ```changePizzaSizes``` as we only need to select them once.
* Calculation of ```dx``` and ```newwidth``` is taken out of the loop which was causing the ***Forced Layout***.


##### Screenshot of the result achieved

![Screen shot of the profile](/screenshots/frame-rate.jpg)
