frontend-nanodegree-mobile-portfolio
====================================

## Website Performance Optimization portfolio project

clone the repo, and develop With gulpJs, nodeJs & Npm
1.read Project structure.md

To get started, check out the repository, inspect the code,

### Getting started

#step for Website Performance Optimization
##Optimize PageSpeed Insights score for index.html

###collaborative optimization
##Jiar Manosalva

#Optimizing the CRP

1. Async javascript
   We reviewed the html file does not immediately need to load javascript, if so follow step 2
1. window.onload event

  ```bash
  asynchronousJS
  <script src="analytics.js" async ></script>
  ```
1. validate cached response

  ```bash
  <img src="img/control.png" class="center" cache-control="HTTP">
  ```
1. minimize css, js
CSS minimizes the base and hits the index.html between style tags
only if it is not very large
1. minimizing gzip
  gzip will allow a compressed page, though hosting in the cloud provide this service when you buy a service

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

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt or gulp and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

#Part 2: Optimize Frames per Second in pizza.html

##optimize the file main.js
1.We modify querySelector methods getElementById and stir # are thus:

```bash
  i = document.getElementById ("randomPizzas"). offsetWidth,
```

1. declare variable randomPizzas, no repeat yourself and change querySelectorAll for getElementsByClassName and remove. line 180 are thus:
```bash
  var randomPizzas = document.getElementsByClassName("randomPizzaContainer");
```

1. The n and i variables can go out the loop and are thus:

```bash
  var n = r(randomPizzas[0], e),i = randomPizzas[0].offsetWidth + n + "px";
  for ( var a = 0; a < randomPizzas.length; a++) {
    randomPizzas[a].style.width = i
  }
```

1. declare the pizzasDiv variable outside the loop and are thus:

```bash
  var pizzasDiv = document.getElementById("randomPizzas");
  for ( var i = 2; 100 > i; i++) {
    pizzasDiv.appendChild(pizzaElementGenerator(i))
  }
```

1. declare variable outside the loop and  calculate the number of rows using the height property of the screen, and then multiply row * cols

```bash
  var frame = 0, e = 8, a = 256, f = Math.ceil(window.innerHeight / a) + 1;

  var movingPizzas1 = document.getElementById("movingPizzas1");
  window.addEventListener( "scroll", updatePositions), document.addEventListener("DOMContentLoaded", function() {
    for (r = 0; e * f > r; r++) {
        var n = document.createElement("img");
        n.className = "mover", n.src = "images/pizza.png", 
        n.style.height = "100px", n.style.width = "73.333px", n.basicLeft = r % e * a, n.style.top = Math.floor(r / e) * a + "px", movingPizzas1.appendChild(n)
    }
    updatePositions()
});

```
Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

