// Assume this is in ./common/dep1.js
define([], function () {
  return {
    firstName: 'John',
    lastName: 'Paxton',
  };
});

var dojoConfig = {
  require: {
    assumeJs: true,
  },
};

// Assume this is in ./common/dep2.js
define([], function() {
  return {
    firstName: 'Priya',
    lastName: 'Moorthy'
  }
})

// Assume this is in ./types/Person.js
define(['../common/dep1'], function (dep1) {
  function Person(firstName, lastName) {
    this.firstName = firstName || dep1.firstName;
    this.lastName = lastName || dep1.lastName;
  }

  return Person;
});

// The assumed boundary of dojo-like.js
require(['./types/Person', './common/dep2'], function (Person, dep2) {
  const bob = new Person('Bob', 'Blaine');
  console.log('First name is: ', bob.firstName); // Prints 'Bob' 
  console.log('dep1.firstName is ', dep2.firstName); // Prints 'Priya'
});

