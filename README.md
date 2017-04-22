## Website Performance Optimization portfolio project 

Challenge, is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques I've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

**Tools Required**

1. PC with latest browser installed especially Google Chrome.
2. Sublime Text Editor.
3. Git bash
4. Ngrok (if not installed please install as per instruction given below).
5. To test speed, use following site: https://developers.google.com/speed/pagespeed/insights/ (check out my website speed : https://shadmanwaris.github.io/optimized-portfolio/ )

#### Part 1: Optimize PageSpeed Insights score for index.html

#### 1.1 Setting up Local server :

1. First of all download ngrok.
2. Then to install (On Windows OS), open the .rar file and extract the files from it to a separate folder save ngrok.exe in it and to run double click the ngrok.exe file.
3. Then go to repo https://github.com/udacity/frontend-nanodegree-mobile-portfolio, clone or download the repository to your local computer to make change to your site for optimisation purpose.
4. Open the folder of your local repo, and copy the ngrok.exe file in it.
5. Now open bash from your current file location.And write following command to start the local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m http.server 8080  or python -m SimpleHTTPServer 8080
  ```

6. Now double click to run ngrok.exe from local repo.
7. Type following command to be online from ngrok cmd.

 ```ngrok
  $> ./ngrok http 8080
  ```
8. Now open the browser and type 127.0.0.1:4040 localhost
9. It will provide you with two links, eg. https://d498d579.ngrok.io/ and other http://d498d579.ngrok.io/,please use https link because it is more secure and safe.
10. Through these link you can check the pagespeed by using your local server.

#### 1.2 How to reach your goal speed (>90 for mobile and desktop) in index.html

To optimize the website and reach desired goal, I have to follow three mainly three strategies:

1. Minimize bytes.
2. Reduce critical Resources
3. Shorten CRP length

* Compression using grunt.

Gruntjs is the one of the best to optmize the website, it help to compress images, minify css file and uglify fin js file.

#### 1.2.1 **Steps to use Grunt :**

1. To run gruntfile.js you need package.json
2. Create package.json, by typing command

  ```bash```
  $> npm init
  
3. The create grunfile.js. To learn more about it installation visit https://gruntjs.com (Getting Started)

#### 1.2.2 Task performed on index.html

* Inlined style.css
* Minify print.css, and perfmatter.js using grunt.
* Compressed images using grunt then use photoshop to compress the image even more.
* Removed webfonts links
* Removed Unneccessary Analytics script.
* Added async to following script, 
    
    ```
    <script async src="http://www.google-analytics.com/analytics.js"></script>
    <script async src="js/perfmatters.min.js"></script>
    
    ```

* Added media="print" to print.css.

  ```
  <link href="css/print.min.css" rel="stylesheet" media="print">
  
  ```

* Moved all the script and css link to bottom of the body.

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

#### How to score 60fps :

* Decreased no. of image generation from 200 to 50 in for loop.*( line  518 )*
* To decerase calculation made while scrolling, pulled out heavy calutation ouside loop. *(line 494)*

  ```
  var top = (document.body.scrollTop / 1250);
  
  ```
* used translate instead of basic left positioing, which help to create layer *(line 498)*

#### Optimization Tips and Tricks (For reference)
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

#### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
