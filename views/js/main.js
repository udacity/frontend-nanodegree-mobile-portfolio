/*
Welcome to the 60fps project! Your goal is to make Cam's Pizzeria website run
jank-free at 60 frames per second.

There are two major issues in this code that lead to sub-60fps performance. Can
you spot and fix both?


Built into the code, you'll find a few instances of the User Timing API
(window.performance), which will be console.log()ing frame rate data into the
browser console. To learn more about User Timing API, check out:
http://www.html5rocks.com/en/tutorials/webperformance/usertiming/

Creator:
Cameron Pittman, Udacity Course Developer
cameron *at* udacity *dot* com
*/

// As you may have realized, this website randomly generates pizzas.
// Here are arrays of all possible pizza ingredients.
var pizzaIngredients = {};
pizzaIngredients.meats = [
  "Pepperoni",
  "Sausage",
  "Fennel Sausage",
  "Spicy Sausage",
  "Chicken",
  "BBQ Chicken",
  "Chorizo",
  "Chicken Andouille",
  "Salami",
  "Tofu",
  "Bacon",
  "Canadian Bacon",
  "Proscuitto",
  "Italian Sausage",
  "Ground Beef",
  "Anchovies",
  "Turkey",
  "Ham",
  "Venison",
  "Lamb",
  "Duck",
  "Soylent Green",
  "Carne Asada",
  "Soppressata Picante",
  "Coppa",
  "Pancetta",
  "Bresola",
  "Lox",
  "Guanciale",
  "Chili",
  "Beef Jerky",
  "Pastrami",
  "Kielbasa",
  "Scallops",
  "Filet Mignon"
];
pizzaIngredients.nonMeats = [
  "White Onions",
  "Red Onions",
  "Sauteed Onions",
  "Green Peppers",
  "Red Peppers",
  "Banana Peppers",
  "Ghost Peppers",
  "Habanero Peppers",
  "Jalapeno Peppers",
  "Stuffed Peppers",
  "Spinach",
  "Tomatoes",
  "Pineapple",
  "Pear Slices",
  "Apple Slices",
  "Mushrooms",
  "Arugula",
  "Basil",
  "Fennel",
  "Rosemary",
  "Cilantro",
  "Avocado",
  "Guacamole",
  "Salsa",
  "Swiss Chard",
  "Kale",
  "Sun Dried Tomatoes",
  "Walnuts",
  "Artichoke",
  "Asparagus",
  "Caramelized Onions",
  "Mango",
  "Garlic",
  "Olives",
  "Cauliflower",
  "Polenta",
  "Fried Egg",
  "Zucchini",
  "Hummus"
];
pizzaIngredients.cheeses = [
  "American Cheese",
  "Swiss Cheese",
  "Goat Cheese",
  "Mozzarella Cheese",
  "Parmesean Cheese",
  "Velveeta Cheese",
  "Gouda Cheese",
  "Muenster Cheese",
  "Applewood Cheese",
  "Asiago Cheese",
  "Bleu Cheese",
  "Boursin Cheese",
  "Brie Cheese",
  "Cheddar Cheese",
  "Chevre Cheese",
  "Havarti Cheese",
  "Jack Cheese",
  "Pepper Jack Cheese",
  "Gruyere Cheese",
  "Limberger Cheese",
  "Manchego Cheese",
  "Marscapone Cheese",
  "Pecorino Cheese",
  "Provolone Cheese",
  "Queso Cheese",
  "Roquefort Cheese",
  "Romano Cheese",
  "Ricotta Cheese",
  "Smoked Gouda"
];
pizzaIngredients.sauces = [
  "Red Sauce",
  "Marinara",
  "BBQ Sauce",
  "No Sauce",
  "Hot Sauce"
];
pizzaIngredients.crusts = [
  "White Crust",
  "Whole Wheat Crust",
  "Flatbread Crust",
  "Stuffed Crust"
];
// Name generator pulled from http://saturdaykid.com/usernames/generator.html
// Capitalizes first letter of each word
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
// Pulls adjective out of array using random number sent from generator
function getAdj(x) {
  switch (x) {
    case "dark":
      var dark = ["dark", "morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted",
        "morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "dark", "gloomy", "homicidal", "murderous", "shady", "misty",
        "dusky", "ghostly", "shadowy", "demen ted", "cursed", "insane", "possessed", "grotesque", "obsessed"
      ];
      return dark;
    case "color":
      var colors = ["blue", "green", "purple", "grey", "scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red",
        "maroon", "silver", "golden", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta",
        "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan",
        "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"
      ];
      return colors;
    case "whimsical":
      var whimsy = ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "breakdancing",
        "hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy",
        "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked",
        "brainwashed"
      ];
      return whimsy;
    case "shiny":
      var shiny = ["sapphire", "opal", "silver", "gold", "platinum", "ruby", "emerald", "topaz", "diamond", "amethyst", "turquoise",
        "starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet", "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy",
        "metallic"
      ];
      return shiny;
    case "noisy":
      var noisy = ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic",
        "orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling",
        "yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping",
        "humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"
      ];
      return noisy;
    case "apocalyptic":
      var apocalyptic = ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic",
        "radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying",
        "rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"
      ];
      return apocalyptic;
    case "insulting":
      var insulting = ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow",
        "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous",
        "boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless",
        "lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed",
        "disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide",
        "horrible", "syncophantic", "unhelpful", "bootlicking"
      ];
      return insulting;
    case "praise":
      var praise = ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful",
        "talented", "exquisite", "enchanting", "fascinating", "interesting", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous",
        "dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave",
        "noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome",
        "majestic", "grand", "stunning"
      ];
      return praise;
    case "scientific":
      var scientific = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological",
        "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar",
        "extinct", "galactic"
      ];
      return scientific;
    default:
      var scientific_default = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological",
        "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar",
        "extinct", "galactic"
      ];
      return scientific_default;
  }
}
// Pulls noun out of array using random number sent from generator
function getNoun(y) {
  switch (y) {
    case "animals":
      var animals = ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo",
        "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan",
        "raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper",
        "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale",
        "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish",
        "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture",
        "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"
      ];
      return animals;
    case "profession":
      var professions = ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic",
        "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor",
        "senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot",
        "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"
      ];
      return professions;
    case "fantasy":
      var fantasy = ["centaur", "wizard", "gnome", "orc", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost",
        "knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester",
        "tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"
      ];
      return fantasy;
    case "music":
      var music = ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums",
        "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone",
        "bugle", "trumpet", "sousaphone", "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor",
        "singer"
      ];
      return music;
    case "horror":
      var horror = ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf",
        "vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter",
        "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath",
        "fiend", "satanist", "moon", "fullMoon"
      ];
      return horror;
    case "gross":
      var gross = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "phlegm",
        "centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance",
        "fluid", "moisture", "garbage", "trash", "bug"
      ];
      return gross;
    case "everyday":
      var everyday = ["mirror", "knife", "fork", "spork", "spoon", "tupperware", "minivan", "suburb", "lamp", "desk", "stereo", "television", "TV",
        "book", "car", "truck", "soda", "door", "video", "game", "computer", "calender", "tree", "plant", "flower", "chimney", "attic", "kitchen",
        "garden", "school", "wallet", "bottle"
      ];
      return everyday;
    case "jewelry":
      var jewelry = ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry",
        "anklet", "bangle", "locket", "finery", "crown", "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin",
        "costume", "ornament", "treasure"
      ];
      return jewelry;
    case "places":
      var places = ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood",
        "city", "town", "suburb", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery",
        "shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"
      ];
      return places;
    case "scifi":
      var scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
        "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
        "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
        "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"
      ];
      return scifi;
    default:
      var scifi_default = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
        "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
        "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
        "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"
      ];
      return scifi_default;
  }
}
// types of adjectives for pizza titles
var adjectives = ["dark", "color", "whimsical", "shiny", "noisy", "apocalyptic", "insulting", "praise", "scientific"];
// types of nouns for pizza titles
var nouns = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry", "places", "scifi"];
// Generates random numbers for getAdj and getNoun functions and returns a new pizza name
function generatePizzaName(adj, noun) {
  var adjectives = getAdj(adj);
  var nouns = getNoun(noun);
  var randomAdjective = parseInt(Math.random() * adjectives.length);
  var randomNoun = parseInt(Math.random() * nouns.length);
  var name = "The " + adjectives[randomAdjective].capitalize() + " " + nouns[randomNoun].capitalize();
  return name;
}
// Chooses random adjective and random noun
function randomName() {
  var randomNumberAdj = parseInt(Math.random() * adjectives.length);
  var randomNumberNoun = parseInt(Math.random() * nouns.length);
  return generatePizzaName(adjectives[randomNumberAdj], nouns[randomNumberNoun]);
}
// These functions return a string of a random ingredient from each respective category of ingredients.
function selectRandomIngredient(cathegory) {
  var randomIngredient = pizzaIngredients[cathegory][Math.floor((Math.random() * pizzaIngredients[cathegory].length))];
  return randomIngredient;
}
//Make list item element for ingredient
var ingredientItemizer = function (string) {
  const li = document.createElement("li");
  li.innerText = string;
  return li;
};
// Returns a string with random pizza ingredients nested inside <li> tags
var makeRandomPizza = function () {
  const pizza = document.createDocumentFragment();
  const numberOfMeats = Math.floor((Math.random() * 4));
  const numberOfNonMeats = Math.floor((Math.random() * 3));
  const numberOfCheeses = Math.floor((Math.random() * 2));
  const numberOfSauces = 1;
  const numberOfCrusts = 1;
  const meatsCathegory = "meats";
  const nonMeatsCathegory = "nonMeats";
  const cheesesCathegory = "cheeses";
  const saucesCathegory = "sauces";
  const crustsCathegory = "crusts";

  pizza.appendChild(generateIngredientItems(numberOfMeats, meatsCathegory));
  pizza.appendChild(generateIngredientItems(numberOfNonMeats, nonMeatsCathegory));
  pizza.appendChild(generateIngredientItems(numberOfCheeses, cheesesCathegory));
  pizza.appendChild(generateIngredientItems(numberOfSauces, saucesCathegory));
  pizza.appendChild(generateIngredientItems(numberOfCrusts, crustsCathegory));

  return pizza;
};
//Generates ingredient items for each cathegory depending of the random number of ingredients
const generateIngredientItems = (numberOfIngredients, cathegory) => {
  const fragment = document.createDocumentFragment();
  for (var i = 0; i < numberOfIngredients; i++) {
    fragment.appendChild(ingredientItemizer(selectRandomIngredient(cathegory)));
  }
  return fragment;
}
// returns a DOM element for each pizza
var pizzaElementGenerator = function (i) {
  const pizzaContainer = document.createElement("div");
  const pizzaImageContainer = document.createElement("div");
  const pizzaImage = document.createElement("img");
  const pizzaDescriptionContainer = document.createElement("div");
  const pizzaName = document.createElement("h4");
  const ul = document.createElement("ul");

  pizzaContainer.classList.add("randomPizzaContainer");
  pizzaContainer.id = "pizza" + i;
  pizzaImageContainer.classList.add("pizzaImgContainer");
  pizzaImage.src = "images/pizza.png";
  pizzaImage.classList.add("img-responsive");
  pizzaDescriptionContainer.classList.add("pizzaDescription");
  pizzaName.innerHTML = randomName();

  pizzaImageContainer.appendChild(pizzaImage);
  pizzaContainer.appendChild(pizzaImageContainer);
  pizzaDescriptionContainer.appendChild(pizzaName);
  ul.appendChild(makeRandomPizza());
  pizzaDescriptionContainer.appendChild(ul);
  pizzaContainer.appendChild(pizzaDescriptionContainer);

  return pizzaContainer;
};
// This function creates pizza's Fragment and appends it when the page loads
const addPizzaFragment = () => {
  const pizzasDiv = document.getElementById("randomPizzas");
  const pizzaFragment = document.createDocumentFragment();
  for (var i = 2; i < 100; i++) {
    pizzaFragment.appendChild(pizzaElementGenerator(i));
  }
  pizzasDiv.appendChild(pizzaFragment);
}
// resizePizzas(size) is called when the slider in "Our Pizzas" section of the website moves.
var resizePizzas = function (size) {
  // User Timing API function
  window.performance.mark("mark_start_resize");
  const pizzaSize = determineSize(size);
  changeSliderLabel(pizzaSize);
  addPizzasSizeClass(pizzaSize);
  // User Timing API is awesome
  window.performance.mark("mark_end_resize");
  window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
  var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
  console.log("Time to resize pizzas: " + timeToResize[timeToResize.length - 1].duration + "ms");
};

// Determine the
function determineSize(size) {
  function sizeSwitcher(size) {
    switch (size) {
      case "1":
        return "small";
      case "2":
        return "medium";
      case "3":
        return "large";
      default:
        console.log("bug in sizeSwitcher");
    }
  }
  var newSize = sizeSwitcher(size);
  return newSize;
}
// Changes the value for the size of the pizza above the slider
function changeSliderLabel(size) {
  const pizzaSize = document.querySelector("#pizzaSize");
  pizzaSize.innerText = size.capitalize();
}
// Add pizzas container approprite size class
function addPizzasSizeClass(size) {
  const randomPizzasContainer = document.querySelector("#randomPizzas");
  randomPizzasContainer.classList = "row";
  randomPizzasContainer.classList.add(`${size}-container`);
}
window.performance.mark("mark_start_generating"); // collect timing data
// User Timing API again. These measurements tell you how long it took to generate the initial pizzas
window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");
// Iterator for number of times the pizzas in the background have scrolled.
// Used by updatePositions() to decide when to log the average time per frame
var frame = 0;
// Logs the average amount of time per 10 frames needed to move the sliding background pizzas on scroll.
function logAverageFrame(times) { // times is the array of User Timing measurements from updatePositions()
  var numberOfEntries = times.length;
  var sum = 0;
  for (var i = numberOfEntries - 1; i > numberOfEntries - 11; i--) {
    sum = sum + times[i].duration;
  }
  console.log("Average scripting time to generate last 10 frames: " + sum / 10 + "ms");
}
// The following code for sliding background pizzas was pulled from Ilya's demo found at:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html
// runs updatePositions on scroll
window.addEventListener("scroll", updatePositions);
//Make DOMContentLoaded initialization function
const initialize = () => {
  addPizzaFragment();
  var cols = 8;
  const colWidth = 256;
  const pizzasAmount = 200;
  const movingPizzasContainer = document.querySelector("#movingPizzas1");
  const movingPizzasFragment = document.createDocumentFragment();
  for (var i = 0; i < pizzasAmount; i++) {
    const elem = createMovingPizza(i, cols, colWidth);
    movingPizzasFragment.appendChild(elem);
  }
  movingPizzasContainer.appendChild(movingPizzasFragment);
  updatePositions();
};
// Generates the sliding pizzas when the page loads.
document.addEventListener("DOMContentLoaded", initialize);
//Add create one moving pizza item
const createMovingPizza = (element, columns, columnWidth) => {
    const elem = document.createElement("img");
    elem.className = "mover";
    elem.src = "images/pizza.png";
    elem.basicLeft = (element % columns) * columnWidth;
    elem.basicTop = (Math.floor(element / columns) * columnWidth);
    return elem;
}
// Moves the sliding background pizzas based on scroll position
function updatePositions() {
  frame++;
  window.performance.mark("mark_start_frame");
  var items = document.querySelectorAll(".mover");
  for (var i = 0; i < items.length; i++) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var phase = Math.sin((scrollTop / 1250) + (i % 5));
    items[i].style.transform = `translateX(${items[i].basicLeft + 100 * phase}px) translateY(${items[i].basicTop}px)`;
  }
  // User Timing API to the rescue again. Seriously, it's worth learning.
  // Super easy to create custom metrics.
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(timesToUpdatePosition);
  }
}