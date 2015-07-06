// Singleton Inheritance involves using Object.create.

// ---- cat -----
var cat = {
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
// inherit
var lion = Object.create(cat);

// specialize
lion.say = function() {
  return 'roar'
};

// ---- test -----
console.log(cat.say());
console.log(lion.say());

lion.legs; // 4
lion.isAsleep(); // true