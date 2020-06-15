// Assume ./common/dep1.js

const dep1 = {
  firstName: 'John',
  lastName: 'Paxton',
};

// Not exported
const x = 10;

export { dep1 };

// Assume the border to es2015-like.js
import { dep1 } from './common/dep1.js';

console.log('dep1.firstName is ', dep1.firstName);
