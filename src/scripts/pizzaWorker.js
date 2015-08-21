import(main.js);

var pizzaElementGenerator = function(i) {
  var HTMLpizzaContainer = '<div id="pizza%data%" class="randonPizzaContainer" style="width: 33.3333%; height: 325px;">
    <div class="col-md-6">
      <img src="img/pizza.png" class="img-responsive random-pizza-image">
    </div>
    <div class="col-md-6">
      <h4>%randomName%</h4>
      <ul>
        %makeRandomPizza%;
      </ul>
    </div>
  </div>'

  var allPizzaElements = '';
  for(var i=0; i<100; i++) {
    pizzaElement = HTMLpizzaContainer.relace(%data&,i);
    pizzaElement = pizzaElement.replace(%randomName%, randomName());
    pizzaElement = pizzaElement.replace(%makeRandomPizza%, makeRandomPizza());

    allPizzaElements += pizzaElement;
  }
}