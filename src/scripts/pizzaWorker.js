importScripts('main.js');

this.onmessage = function(e) {

  var HTMLpizzaContainer = '<div id="pizza%data%" class="randonPizzaContainer" style="width: 33.3333%; height: 325px;"><div class="col-md-6"><img src="img/pizza.png" class="img-responsive random-pizza-image"></div><div class="col-md-6"><h4>%randomName%</h4><ul>%makeRandomPizza%;</ul></div></div>';
  console.log(e);
  var allPizzaElements = '';
  var count = e.data
  for(var i=0; i < count; i++) {
    var pizzaElement = HTMLpizzaContainer.replace('%data%',i);
    pizzaElement = pizzaElement.replace('%randomName%', randomName());
    pizzaElement = pizzaElement.replace('%makeRandomPizza%', makeRandomPizza());
    allPizzaElements += pizzaElement;
  }

  this.postMessage(allPizzaElements);
}