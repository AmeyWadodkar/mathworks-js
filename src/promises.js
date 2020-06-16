// Promise lingo
// resolve => success
// reject => failure

/*
const p = new Promise((resolve, reject) => {
  // do some stuff
  resolve(10);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success');
  }, 5000);
});

p2.then(() => {
  console.log('Promise resolved successfully.');
});
*/

// const pAll = Promise.all(p1, p2, p3,...);
// const pRace = Promise.race(p1, p2, p3,...);

console.log('Waiting on a promise.');

const pResolve = new Promise((resolve, reject) => {
  setTimeout(() => {
    const time = new Date().getTime();
    if (time % 2) {
      resolve([1, 2, 3, 4, 5]);
    } else {
      reject('Failed for some reason');
    }
  }, 500);
});

const x = pResolve
  .then((resolveValue) => {
    console.log('Resolved with: ', resolveValue);
    return resolveValue[3];
  })
  .then((resolveValue /* this is 4 */) => {
    return resolveValue % 2;
  })
  .then((resolveValue /* this is 0 */) => {})
  .catch((error) => {
    console.error('Promise failed because: ', error);
  });

/*
const promiseFetch = fetch(someUrl);

const promiseValue = promiseFetch.then(response => {
  return response.data;
});
*/

const promiseValue = fetch(someUrl).then((response) => {
  const person = response.data.person;
});

somePromise
  .then((value) => {
    // Value is 10
    // return value;
    // return null;
    //
    // throw new Error('PROBLEMS!');
    // return Promise.reject({ message: 'whatever' });
  })
  .then(
    (success) => console.log('Success: ', success),
    (error) => console.error('Error: ', error),
  );

otherPromise
  .catch((error) => {
    // return Promise.reject({ message: 'error', error: error });

    // return 10;

    // return nothing
    
  })
  .then(
    (success) => console.log('Success: ', success),
    (error) => console.error('Error: ', error),
  );
