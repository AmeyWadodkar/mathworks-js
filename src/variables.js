var x = 10;

// ES2015 and later
const y = 20;
let z = 30;

function loop() {
  for (var a = 0; a < 10; a++) {
    var b = a * 2;
    console.log('In the loop: ', a, b);
  }

  console.log('After the loop, in the function: ', b); // 18 or similar
  console.log('After the loop, in the function: ', a); // 10 or similar
}

loop();

// Will break if uncommented
// console.log('After the loop: ', b); // undefined
// console.log('After the loop: ', a); // 9

function betterLoop() {
  for (let d = 0; d < 10; d++) {
    let e = d * 2;
    console.log('In the loop: ', d, e);
  }

  for (let d = 0; d < 10; d++) {}

  // Both of these throw an error
  // console.log('After the loop, in the function: ', d); // 18 or similar
  // console.log('After the loop, in the function: ', e); // 10 or similar
}

// Variations on const

const x = 10;
// x = x + 1;

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

// Breaks
numbers = [7, 8, 9];

const frozenNumbers = Object.freeze([1, 2, 3, 4, 5]);

const frozenPeople = Object.freeze([{firstName: 'John'}, {firstName: 'Priya'}]);
frozenPeople[0].firstName = 'Dan';

export { z };
