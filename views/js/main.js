// The following code for sliding background pizzas was pulled from Ilya's demo found at:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html

//starts scroll information
var lastKnownScrollY = 4;
var ticking = false;

//captures scroll information
function onScroll() {
  lastKnownScrollY = window.scrollY;
  requestTick();
}

//animates bg pizzas on scroll
function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updatePositions);
  }
  ticking = true;
}

// Moves the sliding background pizzas based on scroll position
function updatePositions() {
  var currentScrollY = lastKnownScrollY;
  var items = document.getElementsByClassName("mover");
  for (var i = 0; i < items.length; i++) {
    var phase = Math.sin(currentScrollY + (i % 5));
    items[i].style.left = items[i].basicLeft - 2000 * phase + 'px';
  }
  ticking = false;
}

// runs updatePositions on scroll
window.addEventListener('scroll', onScroll);

// Generates the sliding pizzas when the page loads.
var cols = 8;
var s = 256;
for (var i = 0; i < 400; i++) {
  var elem = document.createElement('img');
  elem.basicLeft = (i % cols) * s;
  elem.className = 'mover';
  elem.src = "images/conformed/pizza.png";
  elem.style.height = "100px";
  elem.style.width = "73.333px";
  elem.style.top = (Math.floor(i / cols) * s) + 'px';
  document.querySelector("#movingPizzas1").appendChild(elem);
  updatePositions();
}

