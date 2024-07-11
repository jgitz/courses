/* 
- for scenarious such as testing we need promises which are already resolved or rejected for test simulation purposes.

- to create a settled resolved promise

    - create promise object with Promise.resolve(<resolve value>) 

- to create a settled rejected promise

    - create promise object with Promise.reject(new Error("Error message"))

- both settled promises can be consumed using .then and .catch with the promise object

eg
*/

// settled resolved promise

const p = Promise.resolve("resolved return value")

// consumption of settled resolved promise

p.then(d => console.log(d))

// settled rejected promise

const q = Promise.reject(new Error("settled rejected promise error message"))

// consumption of settled rejected promise

q.catch(error => console.log(error))