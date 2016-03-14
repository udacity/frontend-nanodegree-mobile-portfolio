## Website Performance Optimization portfolio project

This is project for Udacity Front-End Web Developer Nanodegree, were the objective is to optimize an online portfolio for speed. In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques learned in the [Critical Rendering Path course](https://www.udacity.com/course/ud884). You can find the default Github repository branch [here](https://github.com/udacity/frontend-nanodegree-mobile-portfolio).

###Part 1: Optimize PageSpeed Insights score for index.html

* The new PageSpeed Insights score: Mobile: 92/100, Desktop:92/100

* The following are the performance optimizations I used:

1. Add 'async' attribute to the Google analytics script - The user doesn't need to wait for Google analytics. 
2. Moved the 'print.css' style sheet and the Google fonts stylesheet to the footer and delayed loading until after the page load. 
3. Used media query for 'print' styles.
4. Minified HTML, CSS and JS.
5. Compressed images.
6. specified image dimentions.

####If you want to check the PageSpeed Insights score for this repository,

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
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights!


###Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, I needed to modify views/js/main.js until the frames per second rate was 60 fps or higher. You will find instructive comments in main.js. 

* In order to acheve a constant 60fps when scrolling pizza.html the following code was optimized:

####ORIGINAL CODE:

```bash
// Moves the sliding background pizzas based on scroll position
function updatePositions() {
  frame++;
  window.performance.mark("mark_start_frame");

  var items = document.querySelectorAll('.mover');
  for (var i = 0; i < items.length; i++) {
    var phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }

  // User Timing API to the rescue again. Seriously, it's worth learning.
  // Super easy to create custom metrics.
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(timesToUpdatePosition);
  }
}
  ```

####OPTIMIZED CODE

By moving the query selector to its own for-loop I'm reading the layout properties and then in a second for-loop I'm batching the style changes. By doing this I'm avoiding Stoping Forced Synchronous Layout

  ```bash
  // Moves the sliding background pizzas based on scroll position
function updatePositions() {
  frame++;
  window.performance.mark("mark_start_frame");


  var items = document.querySelectorAll('.mover');

  for (var i = 0; i < items.length; i++) {
    var phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));
  };

  for (var i = 0; i < items.length; i++) {
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }

  // User Timing API to the rescue again. Seriously, it's worth learning.
  // Super easy to create custom metrics.
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(timesToUpdatePosition);
  }
}
  ```
* In order to achieve resizing pizzas in less than 5 ms in pizza.html, the following code was optimized

####ORIGINAL CODE:

```bash
    function determineDx (elem, size) {
    var oldWidth = elem.offsetWidth;
    var windowWidth = document.querySelector("#randomPizzas").offsetWidth;
    var oldSize = oldWidth / windowWidth;

    // Optional TODO: change to 3 sizes? no more xl?
    // Changes the slider value to a percent width
    function sizeSwitcher (size) {
      switch(size) {
        case "1":
          return 0.25;
        case "2":
          return 0.3333;
        case "3":
          return 0.5;
        default:
          console.log("bug in sizeSwitcher");
      }
    }

    var newSize = sizeSwitcher(size);
    var dx = (newSize - oldSize) * windowWidth;

    return dx;
  }

  // Iterates through pizza elements on the page and changes their widths
  function changePizzaSizes(size) {
    for (var i = 0; i < document.querySelectorAll(".randomPizzaContainer").length; i++) {
      var dx = determineDx(document.querySelectorAll(".randomPizzaContainer")[i], size);
      var newwidth = (document.querySelectorAll(".randomPizzaContainer")[i].offsetWidth + dx) + 'px';
      document.querySelectorAll(".randomPizzaContainer")[i].style.width = newwidth;
    }
  }
  ```

####OPTIMIZED CODE

Saving the collection of .randomPizzaContainer to a randomPizza variable before the loop. 
Then in the for-loop I'm batching the style changes and by doing this I'm avoiding Stoping Forced Synchronous Layout as well.

  ```bash
  function changePizzaSizes(size) {
    switch(size) {
      case "1":
        newWidth = 25;
        break;
      case "2":
        newWidth = 33.3;
        break;
      case "3":
        newWidth = 50;
        break;
      default:
        console.log("bug in sizeSwitcher");
    }

    var randomPizzas = document.querySelectorAll('.randomPizzaContainer');

    for (var i = 0; i < randomPizzas.length; i++) {
      randomPizzas[i].style.width = newWidth + "%";
    }
  }
  ```

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

