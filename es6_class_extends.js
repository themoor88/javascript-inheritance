// ES6 uses more advanced ways to declare classes.
// This is the exact same as the constructor function.

// ---- cat -----
class Cat {
  constructor() {
    this.legs = 4
    this.tail = true
  }

  isAsleep() {
    return true
  }

  say() {
    return 'meow'
  }
}

// ---- lion -----
class Lion extends Cat {
  say() {
    return 'roar'
  }
}


// ---- test -----
var cat = new Cat()
var lion = new Lion()

console.log(cat.say())
console.log(lion.say())

lion.legs // 4
lion.isAsleep() // true