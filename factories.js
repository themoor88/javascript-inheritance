// Factories are methods that return objects, much cleaner than the previous examples.
// Lion has all those methods and values copied from the cat. Changing the cat will not change the lion.
// Not as inefficient because of duplication.

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
  // inherit
  var lion = catFactory();

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