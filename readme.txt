P4: Improving Perf of HTML and Pizzas  /  Renee Cooper

Pizzas
* Switch to using getElementBy rather than querySelector
* Use only 50 pizzas instead of 200 for the moving pizzas and update the .top attribute while scrolling
* Move calculations out of for loop in updatePositions()
* Use the randomPizzaContainer style to change the pizza sizes
* Use cloneNode for single update rather than 50
* Clone first pizza rather than creating every one from scratch for the regular pizzas
* Optimize images
* Remove universal selector from css

Index.html
* Async loading resources
* Resize & optimize pictures so we aren't scaling so much
* Provide picture dimensions in HTML or styles
* Inline critical styles
* Use Media tag for print.css
* Delay load the web font
* Delay load the GoogleAnalyticsObject
* Minify the css & js files