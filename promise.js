const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

promise
  .then((value) => console.log(value)) // "Success! Value passed to resolve function"
  .catch((error) => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log("Promise settled")); // "Promise settled"

//Promise.all()
const createPromise = (text, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = createPromise("promiseA value", 1000);
const promiseB = createPromise("promiseB value", 3000);

Promise.all([promiseA, promiseB])
  .then((value) => console.log(value)) //["promiseA value", "promiseB value"]
  .catch((error) => console.log(error));

//Promise.race()
const makePromise = (text, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(text), delay);
  });
};

const promise1 = makePromise("promise1 value", 1000);
const promise2 = makePromise("promise2 value", 3000);

Promise.race([promise1, promise2])
  .then((value) => console.log(value)) // "promiseA value"
  .catch((error) => console.log(error));

//Promise.resolve(), Promise.reject();

const makeGreeting = (guestName) => {
  if (guestName === "" || guestName === undefined) {
    return Promise.reject("Guest name must not be empty");
  }

  Promise.resolve(`Welcome ${guestName}`);
};

makeGreeting("Alex")
  .then((greeting) => console.log(greeting))
  .catch((error) => console.error(error));
