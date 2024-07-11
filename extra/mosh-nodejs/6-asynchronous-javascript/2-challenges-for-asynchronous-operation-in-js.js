/* 
- an asynchronous code in js means we're hoping to execute that conde in future. for eg the setTimeout function will only return its value after a certain time interval in future

- the main challenge of js is.... when the asynchronous functions such setTimeout() is wrapped inside a regular function.... the return of setTimeout() remains undefined when the regular function is set to a variable..... 

  ** js tackles this challenge through 3 patterns

    1) call backs
    2) promises
    3) async await
*/

// challenge eg

console.log("1) step 1 starting")
const variable = regular_function(1)
console.log(variable)
console.log("3) step 3 finish")

function regular_function(param) {
  setTimeout(() => {
    console.log("2) step 2 is a setimeout function wrapped inside regular function")
    return 1
  })
  
}