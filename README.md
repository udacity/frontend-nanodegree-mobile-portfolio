## Website Performance Optimization portfolio project

The challenge, is to optimize the online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques CRP (Critical Rendering Path) and frames per second (FPS).

The project has two branches:
master: the standard code provided for the project.
Desireemelusine-optmization: the optimized code

### Getting started

Clone the repository and launch an HTTP server. This can be acheived by:

##### Python's Simple HTTP Server.
2.x: Invoke python -m SimpleHTTPServer from the root of the project
3.x: Invoke python -m http.server from the root of the project

##### NPM package http-server
Install the package using npm intall -i http-server
Invoke http-server from the root of the project

#### Optimization

### General
* Minified css - all
* Image compress - all
* Moved to the bottom and added async to:  Script Google Analtics  and JS script tags
* Minified html - the 4 projects
* Correct the link for fonts.googleapis.com

### Pizzeria Project
* Changed [document.querySelector] to [document.getElementBy(Id or ClassName] for faster performance

#### function changePizzaSizes(size)
* Refactored the function
* A var pizzaChange outside for-loop to placed inside  document.getElementsByClassName("randomPizzaContainer");
* switch(size) with var newwidth instead of return
* Reduced for-loop calculation

#### function updatePositions()
* Refactored the function
* var items: outside the function
* var scrollPosition outside for-loop to placed inside  document.body.scrollTop / 1250

#### document.addEventListener('DOMContentLoaded', function()
* var movingPizzas outside for-loop to placed inside  document.getElementById('movingPizzas1') - outside the for-loop
* var viewportWidth = window.innerWidth - outside the for loop and to calculate the viewer's viewport
