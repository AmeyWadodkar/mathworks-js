class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.odometer = 0;
  }

  toString() {
    return this.make + ' ' + this.model;
  }

  getMake() {
    return this.make
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color) {
    super(make, model);
    this.year = year;
    this.color = color;
  }

  getBrand() {
    return `A fine ${super.getMake()} automobile`;
  }

  toString() {
    return `${this.color} ${this.year} ${super.toString()}`
  }
}