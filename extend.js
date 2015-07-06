// Extend function is included in most JS libraries/frameworks and is almost
// the exact same as factories but allows for multiple inheritance.
// Composition over inheritance.

var _ = require('underscore');

// ---- catFactory -----
function catFactory() {
  return {
    legs: 4,
    tail: true,
    isAsleep: function() {
      return true
    },
    say: function() {
      return 'meow'
    }
  }
};

// ---- lionFactory -----
function lionFactory() {
  // create a new empty lion object
  var lion = {};

  // inherit
  // _.extend(lion, catFactory());
  // _.extend(lion, mammalFactory());
  // _.extend(lion, carnivoreFactory());
  _.extend(lion, catFactory(), mammalFactory(), carnivoreFactory());

  // specialize
  lion.say = function () {
    return 'roar'
  }
  return lion;
};

// ---- test -----

// Assigning functions as first class variables.
var cat = catFactory();
var lion = lionFactory();

console.log(cat.say());
console.log(lion.say());

lion.legs; // 4
lion.isAsleep(); // true