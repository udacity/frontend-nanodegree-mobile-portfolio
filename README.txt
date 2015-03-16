To run the website:
	
	Open http://worzst.github.io/frontend-nanodegree-mobile-portfolio/ in your browser


Changes made in views/js/main.js:

	For the scrolling part I took the calculation of the sine out of the for loop and made an extra function. Like this it gets fired once when the user starts scrolling but doesn't recalculate the same over and over again for every frame.

	For the change pizza size part I took the calculation for the size out of the loop. It gets now calculated once each time the user changes the size and not calculates every time again while it's looping through the pizzas when the event has only been triggered once.