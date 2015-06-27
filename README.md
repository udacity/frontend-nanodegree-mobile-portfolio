## Website Performance Optimization portfolio project

###Index Optimization
1. Minified CSS and converted it to inline
2. Set Analytics Javascript to async
3. created a smaller version of the pizzeria image to use as a thumbnail.

### Pizza App Optimization
1. Improved pizza size selector by creating a switch that assigns set widths to the pizza thumbnails. Deleted code that calculated the new width within the for loop.
2. Reduced size of pizzeria image using grunt.
3. Reduced total number of sliding pizzas to 30.
4. placed the scrollTop trigger in a variable outside of the updatePositions for loop.
5. Rewrote updatePositions to use transform to reposition the pizzas instead of left.
