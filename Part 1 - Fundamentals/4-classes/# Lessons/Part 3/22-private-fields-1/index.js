/*
  Private Fields
  - ES2022 allows you to define private fields for a class. To define a private field, you prefix the field name with the # sign.

*/

// For example, the following defines the Circle class with a private field radius:
class Circle {
  #radius // define

  constructor(value) {
    this.#radius = value // initialize
  }
  get area() {
    return Math.PI * Math.pow(this.#radius, 2) // calculate
  }
}

// The following creates a new instance of the Circle class and calculates its area:
// Because the #radius is a private field, you can only access it inside the Circle class. In other words, the #radius field is invisible outside of the Circle class.
let circle = new Circle(10)
console.log(circle.area) // 314.1592653589793
console.log(circle.radius) // undefined
