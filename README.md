Changes made to optimize site:

Defined font by adding WebFontConfig to index.html increase speed
Losslessly compressed profilepic image per PageSpeed
Compressed and resized images/pizzeria.jpg per PageSpeed
Optimized CSS delivery by inlining CSS to index.html file per PageSpeed
Decreased the number of pizzas generated from 200 to 28 in main.js
Minimized main.js by removing code from loops and defining the variables within the loops


Steps to run application:

Copy/Paste the following link into your browser to view the main site:
	http://tay1120.github.io/frontend-nanodegree-mobile-portfolio/
Click on the last hyperlink at the bottom of the page that is labeled "Cam's Pizzeria" to view the pizza.html page
Feel free to browse through the site and click on the links to view the various pages.
 

Resources:

http://tay1120.github.io/frontend-nanodegree-mobile-portfolio/
https://developers.google.com/speed/docs/insights/LeverageBrowserCaching
https://developers.google.com/speed/docs/insights/MinifyResources
https://developers.google.com/speed/docs/insights/OptimizeImages
https://developers.google.com/speed/docs/insights/EnableCompression
https://developers.google.com/speed/docs/insights/BlockingJS
http://discussions.udacity.com/t/rendering-browser-60-fps/14327
https://github.com/udacity/fend-office-hours/tree/master/Web%20Optimization/Effective%20Optimizations%20for%2060%20FPS
http://discussions.udacity.com/t/how-do-you-get-60-fps-consistently/2423/3
http://discussions.udacity.com/t/stuck-on-pizza-need-help-with-rps-and-resize-pizza/14719
http://i.imgur.com/cI6zwUo.jpg
https://www.udacity.com/course/viewer#!/c-ud884-nd
http://discussions.udacity.com/t/what-are-the-best-was-to-improve-the-updatepositions-and-changepizzasizes-functions/3102
http://discussions.udacity.com/t/web-site-optimization-setup/13826
http://discussions.udacity.com/t/cannot-connect-s3-phone-via-usb/8185
https://developer.chrome.com/devtools/docs/remote-debugging
http://discussions.udacity.com/t/difference-between-refresh-button-and-ctrl-shift-r-shortcut/4035
https://pages.github.com/



## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
