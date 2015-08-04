##Instructions for Launching the Project
1. Open Cameron Pittman's portfolio through the index.html page.
2. Click on "Cam's Pizzeria" project to open pizza.html. 
3. Once on the pizza.html page, scroll down to the slider bar underneath "Our Pizzas".
4. You can use the slider bar to change the size of the pizzas. 

###Page Speed
I improved the index.html page score, so that the index.html page came back with a PageSpeed score above 90 with the following changes.

1.	Minified the pizzeria image from 2.4 MB to 110KB using an online image optimizer.
2.	Simplified the CSS file by inlining the CSS that contributed to the initial page load. I also added code at the bottom of the HTML page that loaded the simplified CSS page (restStyle.css) after the initial page load and during the idle time. 
3.	Created new class names for the inlined CSS that originally forced the browser to re-read the DOM tree. For example “li img” became “contentImage”. 
4.	Added “async” to the Google analytics source and “print media” to the print style sheet.
5.	Added script that linked to Google Fonts at the bottom of the HTML page, so that it loaded after the initial page load and during the idle time. 

###60 FPS
In order to optimize the “Cam’s Pizzeria” webpage, I had to improve the pizza.html page so that it had a consistent frame rate at 60 fps when the user scrolled down the page. In order to achieve this rate, I added the following four changes.

1.	Decreased the number of pizzas from 200 to 20. 
2.	Changed the phase variable to an array of 5 numbers, so that the browser didn’t have to recalculate the position of the pizzas every time the user scrolled down the page. 
3.	Changed “selectAllQueryItems()” to “getElementByClassName. 
4.	Added “backface-visibility: hidden” to the “mover” class in the CSS file, so that the pizzas in the background had their own layer and the browser didn’t have to repaint the whole screen every time the user scrolled down the page. 
5.	Created numRandomPizzas function to calculate the number of random pizzas based on the browser height and width. This function is called both when the page is initially loaded and when scrolling. 

###Resize Pizzas
I decreased the resize pizza time from 5 ms to 0.84 ms with the following steps.

1.	Deleted “determinedDx” function, so that the “changePizzaSizes” function does not have to calculate the change in pizza sizes. This calculation was pointless because there are only 3 set sizes. Now the browser only has to determine if the pizza is one of three set sizes. 
2.	Removed the px to % conversion, since the pizzas’ width as a percentage is enough to determine the correct pizza size. 
3.	Removed the scrollTop calculation from the for loop within the for loop within the “updatePosition” function (line 425). Created a new variable called moveTop (line 425) that calculated the scrollTop.

###Personalization
I also personalized Cam’s Pizzeria’s page to become Cam’s Compassionate Pizzeria:
* Rewrote the ingredients, so that they only include plants. 
* Changed the title and text of the page to reflect plant power. ☺ 

###Changes from Submission Three
1. Minified pizzeriaMini to become pizzeriaThumbnail with a width of 100 pixels and then changed index.html to point to pizzeriaThumbnail. PageSpeed score is now 94 for desktop and 93 for mobile. 
2. Added "use strict" in main.js to make the JavaScript more secure. This resulted in having to create a variable newWidth for the resize pizza function since newWidth was not declared as a variable in the original code. 
3. Created pizzaDiv outside of the for loop. 
4. Create child element image outside of for loop. 
5. Changed querySelector("#movingPizzas1") to getElementById("movingPizzas1") in order to appendChild(elem).

###Changes From Submission Four
1. Submitted js file to jshint.com and from websites suggestions, removed two unnecessary semi-colons.
2. Declared all variables outside of for loops.
3. Had trouble with pushing images to GitHub. It could be that I needed to be in the project's main repository in order to push images onto GitHub. 
## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

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
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
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

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
