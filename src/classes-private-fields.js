class Car {
  mileage = 0;
  speed = 0;
  #color = 'red';

  constructor(config = {}) {
    console.debug('Car.constructor');
    /*
    this._color = config.color;
    this.mileage = config.mileage;
    this.speed = config.speed || this.speed;
    */

    if (config.color) {
      this.#color = config.color;
      delete config.color;
    }

    // console.log('keys? ', Object.keys(this));
    // console.log('props?', Object.getOwnPropertyNames(Object.getPrototypeOf(this)));
    Object.seal(this);

    // Object.assign(destination, one, two, three....)
    Object.assign(this, config);
    // this = {...this, ...config};
  }

  get color() {
    return this.#color;
  }

  set color(ignore) {
    console.warn('You cannot "set" the color of a car!');
    return undefined;
  }

  drive(speed) {
    console.log('Car.drive()');
    this.speed = speed;
  }

  getSpeed() {
    return this.speed;
  }

  toString() {
    return 'A car';
  }
}

// let honda = new Car({ color: 'blue', mileage: 50000, firstName: 'John', toString: () => 'Overridden toString()' });
/* 
let honda = new Car({
  color: 'blue',
  mileage: 50000,
  toString: () => 'Overridden toString()',
});
 */
let honda = new Car({ color: 'blue', mileage: 50000 });
