// Constructor functions are also objects involves using Object.new.

// ---- cat -----

function Cat() {};

// Adding to the prototype property of the Cat object.
Cat.prototype = {
  legs: 4,
  tail: true,
  isAsleep: function() {
    return true
  },
  say: function() {
    return 'meow'
  }
};

// ---- lion -----

function Lion() {};

// inherit
Lion.prototype = Object.create(Cat.prototype);

// specialize
Lion.prototype.say = function() {
  return 'roar'
};

// ---- test -----

//  Using the new keyowrd to instantiate an object from the constructor function.
var cat = new Cat();
var lion = new Lion();

console.log(cat.say());
console.log(lion.say());

lion.legs; // 4
lion.isAsleep(); // true