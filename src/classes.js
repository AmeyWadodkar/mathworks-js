const privateFields = ['color'];

export default class Car {
  mileage = 0;
  speed = 0;

  constructor(config = {}) {
    console.debug('Car.constructor');
    /*
    this._color = config.color;
    this.mileage = config.mileage;
    this.speed = config.speed || this.speed;
    */

    privateFields.forEach((field) => {
      if (config[field]) {
        this[`_${field}`] = config[field];
        delete config[field];
      }
    });

    // console.log('keys? ', Object.keys(this));
    // console.log('props?', Object.getOwnPropertyNames(Object.getPrototypeOf(this)));

    // Object.preventExtensions
    Object.seal(this);
    // Object.freeze

    // Object.assign(destination, one, two, three....)
    Object.assign(this, config);
    // this = {...this, ...config};
  }

  get color() {
    return this._color;
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

let honda = new Car({ color: 'blue', mileage: 50000, firstName: 'John', toString: () => 'Overridden toString()' });
/* 
let honda = new Car({
  color: 'blue',
  mileage: 50000,
  toString: () => 'Overridden toString()',
});
 */
// let honda = new Car({ color: 'blue', mileage: 50000 });
