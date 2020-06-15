function add(x, y) {
  return x + y;
}

// (arguments) => return expresion
const addArrow = (x, y) => x + y;

const addArrowBody = (x, y) => {
  // Do something with x
  // Do something with y

  return x + y;
};

const personArrow = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName,
  };
};

const addArrowReturn = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName,
});

const sayHello = () => console.log('hello');

const doubler = x => {
  return x * 2;
}

const squared = x => x * x;
const x = x => x * x;

