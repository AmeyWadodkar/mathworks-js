define(["dojo/_base/declare", "my/Foo"], function(declare, Foo){
  return declare(null, {
    mileage: 0,
    speed: 0,

    constructor: function(config){
      Object.assign(this, config);
    },

    drive(speed) {
      console.log('Car.drive()');
      this.speed = speed;
    }
  
  });
});