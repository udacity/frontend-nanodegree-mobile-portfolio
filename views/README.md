**The final project is available on:** [Link] (https://valentinaarkh.github.io/frontend-nanodegree-mobile-portfolio/);

# Optimizations of Portfolio

## Optomization of index.html

1. Add Critical rendering CSS to index.html as inline style.
2. Add media query to devices which screen width is less than 480px to a separate file and add *media="only screen and (max-width:480px)"* attribute  to load it as needed.
3. Add *media="print"* attribute to print.css file link to load it as needed.
4. Add *asyn* attribute to perfmatters.js and analytics scrypts as they are not critical for page rendering so they do not block parcing process.
5. Minify styles.css file with online [CSS minifiation tool] (https://cssminifier.com/).
6. Make all css styles asynchronous with the help of [LoadCSS] (https://github.com/filamentgroup/loadCSS) function.
7. Add all images that were loaded by link to project img folder to reduce the number of requests.
8. Optimize images by using [Image jpeg compress tool] (https://compressjpeg.com/) and [Image png compress tool] (https://compresspng.com).
9. Delete unnecessary empty lines and spaces in html files.
10. Make the same changes with project-2048.html, project-mobile.html and project-webperf.html.

## Optimization of Pizzaria page

1. Compress all project images using [Image compress tool] (https://compressjpeg.com/).
2. Minify bootstrap-grid.css file.
3. Minify styles.css file with online [CSS minifiation tool] (https://cssminifier.com/).
4. Make styles.css asynchronous with the help of [LoadCSS] (https://github.com/filamentgroup/loadCSS) function.
4. Remove empty lines and unnecessary whitespaces from pizza.html.
5. Optimize main.js
    1. Remove unnecessary empty lines.
    2. Remove functions for generating each ingredient and make common function to generate ingredients **selectRandomIngredient** and as the result minify code length and remove repeated functions.
    3. Refactor **makeRandomPizza** to short the code.
    4. Create **generateIngredientItems** function which creates pizza ingrediets fragment with the help of **document.createDocumentFragment** funtion so as not to append each child in the DOM on each for-loop iteration.
    5. Remove all styles assignments from **pizzaElementGenerator** and make sepsrete classes so as to determine these styles in styles.css file.
    6. Create **addPizzaFragment** function which creates document Fragment with all pizzas in it and then appends this fragment on the page. Previous function appends each pizza element on the page during each for-loop iteration.
    7. Refactor **resizePizzas** function. The main modification of this function is taht on making pizza's size we do not add width of the pizza's container directly from the js for each iteration in the for-loop. **#randomPizzas** container now will get *small-container*, *medium-container* or *large-container* class on each resize action and all the pizza's containers width will be changed with the help of css class properties.
    8. Add page rendering functions available on DOMContentLoaded event so as not to inerrrupt HTML parcing.
    9.Create **movingPizzasFragment** and add all moving pizzas in the background to this fragment so as not to append each pizza on each for-loop iteration.
    10. Refactor **updatePositions** function. Replace the animation with position *top* and *left* properties and make it with the help of *transform: translate* property as transfrom propery triggers only page composition. This helps us to render the page much more faster.



