var x = 10;

// ES2015 and later
const y = 20;
let z = 30;

function loop() {
  for (a = 0; a < 10; a++) {
    var b = a * 2;
    console.log('In the loop: ', a, b);

    c = a + b;
  }

  console.log('After the loop, in the function: ', b); // 18 or similar
  console.log('After the loop, in the function: ', a); // 10 or similar

}

loop();

console.log('After the loop: ', b); // undefined
console.log('After the loop: ', a); // 9

export {z};