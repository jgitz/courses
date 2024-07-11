/* 
- call back function  : is a function that we give as an ARGUMENT inside another function call

- call back function is used as a soluting for returning value of an asynchronous code which is wrapped inside a regular function... it is implemented in following step

  - write the regular function with a call back function as parameter

  - put the asynchronous code such as setTimeout inside the regular function

  - instead of return keyword for the asynchronous code.... use the return value as an argument inside the callback function and call it inside the regular function in place of return

  - call the regular function with a call back function to see value you gave inside the call back function inside the asynchronous code.... and the call back argument function should have console.log inside the function body to display the asynchronous code argument

    ** problem with this approach is CALLBACK HELL

    ** CALLBACK HELL : the callback argument function body will have nested functions to get various data from the parent function code block

      ** one solution to callback hell is instead of writing the callback function as an anonymous function as an argument...... define the callback function as named functions outside and the  PASS it as REFERENCE (function without bracket) place of callback function argument....

      ** another solution is to use promises

*/

// implementation of call back to return value of an asynchronous code inside a regular function

console.log("1) starting")
regular_function(1, (return_value) => {
  console.log(return_value)
}
)
console.log("3) end")

function regular_function (param, callback_function) {
  console.log(param," executing regular function codes....")

  setTimeout(() => {
    console.log("executing set timeout inside regular function")

    callback_function("return value as callback argument in form of string")
  }, 2000)
}