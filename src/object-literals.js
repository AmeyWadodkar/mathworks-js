const user = {
  displayName: 'DCH Mortgages',
  payeeId: 'DCHM$101',
  email: 'info@dch-mortgages.com',
  address: {
    street: '1393 Caton St',
    city: 'Roxbury',
    state: 'CT',
    postalCode: '06783',
  },
  id: '101',
  version: 1,
  lastUpdated: '2020-05-07T19:31:42.232Z',
  active: true,
};

Object.defineProperty(user, 'displayName', {
  
})


for (let key in user) {
  console.log(key + ' : ' + user[key]);
}

// const keys = Object.keys(user);
// console.log('keys: ', keys);

// keys.forEach((key) => {
Object.keys(user).forEach((key) => {
  console.log(`${key} : ${user[key]}`);
});

const values = Object.values(user);

const entries = Object.entries(user);

entries.forEach(([key, value]) => {
  // let key = keyValuePair[0];
  // let value = keyValuePair[1];
  // let [key, value] = keyValuePair;

  console.log(`${key} : ${value}`);
});

let honda = {
  speed: 55,
  // Good
  drive() {
    console.log('Called drive()');
    console.log(`Current speed: ${this.speed}`);
  },
  // Good
  driveFunction: function() {
    console.log('Called driveFunction()');
    console.log(`Current speed: ${this.speed}`);
  },
  // No access to this.speed because it's an arrow function
  driveArrow: () => {
    console.log('Called driveArrow()')
    console.log(`Current speed: ${this.speed}`);
  },
}