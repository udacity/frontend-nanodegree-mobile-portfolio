#Optimizations of Portfolio

##Optomization of index.html

1. Add Critical rendering CSS to index.html as inline styles.
2. Add media query to devices screen width less than 480px to a separate file and add media="only screen and (max-width:480px)" attribute to load it as needed.
3. Add media="print" attribute to print.css file to load it as needed.
4. Add asyn attribute to perfmatters and analytics scrypts as they are not critical for page rendering and so as they not blocking parcing process.
5. Minify styles.css file with online [CSS minifiation tool] (https://cssminifier.com/).
6. Make all css styles asynchronous with the help of [LoadCSS] (https://github.com/filamentgroup/loadCSS) function.
7. Add all images that were loaded by link to project img folder to reduce the number of requests.
8. Optimize images by using [Image jpef compress tool] (https://compressjpeg.com/) and [Image png compressor tool] (https://compresspng.com).
9. Delete unesessary empty lines and spaces in html files.
10. Make the same changes with project-2048.html, project-mobile.html and project-webperf.html.

## Optimization of Pizzaria page

1. Compress all project images using [Image compress tool] (https://compressjpeg.com/).
2. Minify bootstrap-frid.css file.
3. Minify styles.css file with online [CSS minifiation tool] (https://cssminifier.com/).
4. Make styles.css asynchronous with the help of [LoadCSS] (https://github.com/filamentgroup/loadCSS) function.
4. Remove empty lines and unnesessry whitespaces from pizza.html.
5. Make the download of main.js script asyn so as not to block the page parsing process.
6. Optimize main.js
    1. Remove unnecessary empty lines.
    2. Remove functions for generating each ingredient and make common function to generate ingredients **selectRandomIngredient**.
    3. Refactor **makeRandomPizza** to short the code.
    4. Create **generateIngredientItems** function which creates pizza ingrediets fragment with the help of **documentFragment** but not appendin each child in the DOM on each for loop iteration.
    5. Remove all styles determinations from **pizzaElementGenerator** and make sepsrete classes so as to determine these styles in styles.css file.
    6. Create **addPizzaFragment** function which creates document Fragment with all pizzas in it and then appends this fragment to the page. Previous function appends a pizza element on the page during each for loop iteration.
    7. Refactor **resizePizzas** function. The main modification of this function is taht on making pizza's size we do not add width of the pizza's container directly from the js for each pizza in the for loop as. **#randomPizzas** container now will get *small-container*, *medium-container* or *large-container* class and all the pizza's containers width will be changes with the help of css class properties.
    8. Add page rendering functions available on DOMContentLoaded event.
    9.Create **movingPizzasFragment** and add all moving pizzas in the backgraun to this fragment so as not to append one pizza on each for loop iteration.
    10. Refactor **updatePositions** function. Replace the animation with position *top* and *left* properties and make it with the help of *transform: translate* property as transfrom propery triggers only composition. This helps us to render the page much more faster.



