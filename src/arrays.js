const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const names = ['John', 'Dan', 'Tim', 'Kristen', 'Kara'];

const exampleArray = new Array(); // const exampleArray = [] is the same thing

// const exampleArray2 = [,,,,]
const exampleArray2 = new Array(5);

const exampleArray3 = new Array(5, 8);
const exampleArray4 = new Array('John', 'Dan');

console.log('names[1]: ', names[1]);
console.log('How many names? ', names.length);

for (let x = 0; x < names.length; x++) {
  console.log('Current name: ', names[x]);
}

let y = 0;
while (y < names.length) {
  console.log('Current name: ', names[y]);
  y++;
}

// For arrays
// Loop over values
for (let name of names) {
  console.log('Current name: ', name);
}

// Usually for objects
// Loop over iterable keys / index
for (let name in names) {
  console.log('Current name: ', name);
}

names.forEach(function (name, index, array) {
  console.log('The name ' + name + ' is at index ' + index);
  return index;
});

names.forEach((name) => console.log('Current name: ', name));

people.forEach((person) => doSomthingToPersonObject(person));

// For loops have break and continue
// Array processors just have return

// Returns false if predicate function always returns false
// Otherwise returns true
names.some((name) => name.length === 2);

// Every iteration of the predicate must return true
// Otherwise returns false overall
names.every((name) => {
  return true;
});

let plusFive = numbers.map(number => number + 5);

let isFound = names.includes('Tim');
let position = names.indexOf('Tim'); // -1 if not found

let foundElement = names.find(name => {
  // Complex matching criteria
  return name.startsWith('K');
});

let filteredNames = names.filter(name => {
  return name.length > 3;
})