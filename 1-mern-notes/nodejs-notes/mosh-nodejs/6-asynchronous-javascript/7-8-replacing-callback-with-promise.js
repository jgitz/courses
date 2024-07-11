/* 
- our challenge is to return the value of an asynchronous function wrapped inside a wrapper function.... previously we've used callback.... but this results in callback hell..... so we now use promise

- steps to make promise inside a regular function

  - make the regular function

  - inside the regular function.... return a new Promise() constructor with an arrow function with resolve and reject parameters....

  - write the async codes inside the promise arrow function

  - write the return values inside the resolve(<return value>)

  - to consume this call the regular function and chain it with .then and .catch

    ** always couple catch with a then

*/

// eg

function regular_function() {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("timeout inside promise....")
      resolve("timeout return value")
      reject(new Error("error message"))
    }, 2000);

  })
}

regular_function().then(result => console.log(result)).catch(err => console.log(err.message))

// **** to see complete rror message you can console.log(err)

