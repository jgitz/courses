/* 
- PROMISE: is an object that holds the eventual result of an asynchronous operation. 

  - when an asynchronous operation finishes the result will be either a value or an error

  - promise promises that it'll give the eventual result of an asynchronous operation.

  - promise has 3 states 

      1) pending state: when we create a promise, it'll be in pending state

      2) fulfilled state: if the promise completes the asynchronous operation successfully, it'll be in fulfilled state

      3) rejected state: if the asynchronous operations intercepts some problem, it'll be in rejected state and have to return error message

- steps to create a promise

    - promise object is set using a new Promise() construction function with a function as parameter. This function will have two parameters RESOLVE and REJECT

    - inside the arrow function body...
    we use async codes such as set timeout
    .. we use resolve(<return value>) to give out value if the the async codes are success.... if unsuccessful we can give out error value in reject(new Error("<message>""))

- steps to consume a Promise: now that we created the promise, the value of asynchronous codes can be accessed by using .then and .catch on the promise object


*/

// eg: promise creation and consumption
 
// promise creation

const promise_object = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("1) timeout function start")

    // resolve("return value from promise")

    reject(new Error("error message"))

  }, 2000);
})

// promise consumption

promise_object.then(result => console.log(result)).catch(error => console.log(error.message))