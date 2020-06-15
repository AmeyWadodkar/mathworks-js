// Works
console.log(add(2, 3));

// Error
// console.log(add2(2, 3));

function add(x = 0, y = 0) {
  // if (x === undefined) x = 0;
  // if (y === undefined) y = 0;

  return x + y;
}

let add2 = function (x, y) {
  return x + y;
};

console.log(add(5));

// Rest operator
function addAll(...numbers) {
  let total = 0;
  for (let x = 0; x < numbers.length; x++) {
    total = total + numbers[x];
  }

  return total;
}

console.log(addAll(1, 2, 7, 3, 9, 4, 7, 34, 7, 87, 456, 3));

const subtract = function (x, y) {
  return x - y;
};

let minus = subtract;

console.log(' 5 - 2 = ', minus(5, 2));

function operate(x, y, op) {
  return op(x, y);
}

console.log('5 - 2 = ', operate(5, 2, minus));

function betterOperate(op, ...operands) {
  op(...operands);
}
