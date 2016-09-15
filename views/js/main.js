/*WTF22
Welcome to the 60fps project! Your goal is to make Cam's Pizzeria website run
jank-free at 60 frames per second.
There are two major issues in this code that lead to sub-60fps performance. Can
you spot and fix both?
Built into the code, you'll find a few instances of the User Timing API
(window.performance), which will be console.log()ing frame rate data into the
browser console. To learn more about User Timing API, check out:
http://www.html5rocks.com/en/tutorials/webperformance/usertiming/
Creator:
Cameron Pittman, Udacity Course Developer
cameron *at* udacity *dot* com
*/

// As you may have realized, this website randomly generates pizzas.
// Here are arrays of all possible pizza ingredients.
/*var nameWorker = new Worker('js/namegenerator.js');
var pizzaWorker = new Worker('js/pizzagenerator.js');

var pizzaNames = [];
var pizzaIngredients = [];

nameWorker.postMessage(pizzaNames);
nameWorker.onmessage = function(e) {
  console.log(e.data);
  console.log(e.data[0]);
  console.log(e.data[20]);
  };



pizzaWorker.postMessage(pizzaIngredients);
pizzaWorker.onmessage = function(f) {
  console.log(f.data[0]);
  };
*/



randomPie.onmessage = function(e) {
  // returns a DOM element for each pizza
  var pizzaElementGenerator = function(i) {
    var pizzaContainer,             // contains pizza title, image and list of ingredients
        pizzaImageContainer,        // contains the pizza image
        pizzaImage,                 // the pizza image itself
        pizzaDescriptionContainer,  // contains the pizza title and list of ingredients
        pizzaName,                  // the pizza name itself
        ul;                         // the list of ingredients

    pizzaContainer = document.createElement("div");
    pizzaImageContainer = document.createElement("div");
    pizzaImage = document.createElement("img");
    pizzaDescriptionContainer = document.createElement("div");

    pizzaContainer.classList.add("randomPizzaContainer");
    pizzaContainer.style.width = "33.33%";
    pizzaContainer.style.height = "325px";
    pizzaContainer.id = "pizza" + i;                // gives each pizza element a unique id
    pizzaImageContainer.style.width="35%";

    pizzaImage.src = "images/pizza.png";
    pizzaImage.classList.add("img-responsive");
    pizzaImageContainer.appendChild(pizzaImage);
    pizzaContainer.appendChild(pizzaImageContainer);

    pizzaDescriptionContainer.style.width="65%";

    pizzaName = document.createElement("h4");
    pizzaName.innerHTML = e.data[i];
    pizzaDescriptionContainer.appendChild(pizzaName);

    ul = document.createElement("ul");
    ul.innerHTML = e.data[i + 98];
    pizzaDescriptionContainer.appendChild(ul);
    pizzaContainer.appendChild(pizzaDescriptionContainer);

    return pizzaContainer;
  };

    // This for-loop actually creates and appends all of the pizzas when the page loads
    for (var i = 2; i < 100; i++) {
    var pizzasDiv = document.getElementById("randomPizzas");
    pizzasDiv.appendChild(pizzaElementGenerator(i));
  };

};

// resizePizzas(size) is called when the slider in the "Our Pizzas" section of the website moves.
var resizePizzas = function(size) {
  window.performance.mark("mark_start_resize");   // User Timing API function

  // Changes the value for the size of the pizza above the slider
  function changeSliderLabel(size) {
    switch(size) {
      case "1":
        document.querySelector("#pizzaSize").innerHTML = "Small";
        return;
      case "2":
        document.querySelector("#pizzaSize").innerHTML = "Medium";
        return;
      case "3":
        document.querySelector("#pizzaSize").innerHTML = "Large";
        return;
      default:
        console.log("bug in changeSliderLabel");
    }
  }

  changeSliderLabel(size);

   // Returns the size difference to change a pizza element from one size to another. Called by changePizzaSlices(size).
  function determineDx (elem, size) {
    var oldWidth = elem.offsetWidth;
    var windowWidth = document.querySelector("#randomPizzas").offsetWidth;
    var oldSize = oldWidth / windowWidth;

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
    var dx = determineDx(document.querySelector(".randomPizzaContainer"), size);
    var newwidth = (document.querySelector(".randomPizzaContainer").offsetWidth + dx) + 'px';
    for (var i = 0; i < document.querySelectorAll(".randomPizzaContainer").length; i++) {
      document.querySelectorAll(".randomPizzaContainer")[i].style.width = newwidth;
    }
  }

  changePizzaSizes(size);

  // User Timing API is awesome
  window.performance.mark("mark_end_resize");
  window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
  var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
  console.log("Time to resize pizzas: " + timeToResize[timeToResize.length-1].duration + "ms");
};

window.performance.mark("mark_start_generating"); // collect timing data



// User Timing API again. These measurements tell you how long it took to generate the initial pizzas
window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");

// Iterator for number of times the pizzas in the background have scrolled.
// Used by updatePositions() to decide when to log the average time per frame
var frame = 0;

// Logs the average amount of time per 10 frames needed to move the sliding background pizzas on scroll.
function logAverageFrame(times) {   // times is the array of User Timing measurements from updatePositions()
  var numberOfEntries = times.length;
  var sum = 0;
  for (var i = numberOfEntries - 1; i > numberOfEntries - 11; i--) {
    sum = sum + times[i].duration;
  }
  console.log("Average scripting time to generate last 10 frames: " + sum / 10 + "ms");
}

// The following code for sliding background pizzas was pulled from Ilya's demo found at:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html

// Moves the sliding background pizzas based on scroll position
function updatePositions() {
  requestAnimationFrame(updatePositions);
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

// runs updatePositions on scroll
window.addEventListener('scroll', requestAnimationFrame(updatePositions));

// Generates the sliding pizzas when the page loads.
document.addEventListener('DOMContentLoaded', function() {
  var cols = 8;
  var s = 256;
  for (var i = 0; i < 200; i++) {
    var elem = document.createElement('img');
    elem.className = 'mover';
    elem.src = "images/pizza.png";
    elem.style.height = "100px";
    elem.style.width = "73.333px";
    elem.basicLeft = (i % cols) * s;
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
    document.querySelector("#movingPizzas1").appendChild(elem);
  }
  updatePositions();
});
