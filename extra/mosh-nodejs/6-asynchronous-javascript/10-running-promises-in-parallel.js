/* 
- if you have multiple promises and we want to do something after simultaneous execution of the two promises we use...

  - Promise.All([p1, p2]).then()

      ** p1 and p2 are 2 promise objects

      ** the o/p is return values of the two promises in an array

      ** the two promises are started almost simultaneously

      ** if one promise is error and rejected the output of Promise.All is also rejected

          ** if you want to get output of simultaneous execution of promises even if on is rejected use Promise.race() method instead of Promise.all() like this

              Promise.race([p1, p2]).then()

                ** here the output is not array

                ** the returned value will be of the promise which was successful

  eg
*/

// eg

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 return value")
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 return value")
  }, 2000)
})

// consumption using Promise All method 

Promise.all([p1, p2]).then(d => console.log(d))

/* o/p :
[ 'p1 return value', 'p2 return value' ]
*/