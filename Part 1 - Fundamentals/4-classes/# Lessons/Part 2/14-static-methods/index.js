/*
  Inheriting static members


*/

// Besides the properties and methods, the child class also inherits all static properties and methods of the parent class. For example:
class Animal {
  constructor(legs) {
    this.legs = legs
  }
  walk() {
    console.log('walking on ' + this.legs + ' legs')
  }

  // ***
  static helloWorld() {
    console.log('Hello World')
  }
}

class Bird extends Animal {
  fly() {
    console.log('flying')
  }
}

// In this example, the Animal class has the helloWorld() static method and this method is available as Bird.helloWorld() and behaves the same as the Animal.helloWorld() method:
Animal.helloWorld()
Bird.helloWorld()
