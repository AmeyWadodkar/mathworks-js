// Assume this is in ./common/dep1.js
module.exports = {
  firstName: 'John',
  lastName: 'Paxton',
};


// The boundary for node-like.js 
const john = require('./common/dep1.js');
const priya = require('./common/dep2.js');