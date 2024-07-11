const promise = new Promise((resolve, reject) => {
  resolve("promise")
}) /* 

***** resolve method DON'T NEED console.log to display output inside console like this 

    resolve(console.log("promise"))

      ** the above is wrong

*/


function f1() {
  console.log("f1")
}

function f2() {
  console.log("f2")
}

function main() {
  // synchronous function 
  f1();

  // web api async function 

  setTimeout(() => {
    console.log("timeout")
  }, 0) 

  // promise async function
  
  promise.then((resolve) => console.log(resolve))
  
  // asynchronous function 
  f2()
}

main() /* o/p

  f1
  f2
  promise
  timeout

   ** see here the synchronous functions gets executed first

   ** when asynchronous functions got executed.... promise got preference over web api method 

*/