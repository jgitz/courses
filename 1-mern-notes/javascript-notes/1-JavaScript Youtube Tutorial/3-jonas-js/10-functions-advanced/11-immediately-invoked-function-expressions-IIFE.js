/* 

- what is IIFE in js?

    ** full form: Immediately Invoked Function Expression

    ** IIFE's are function that are only able to run once

    ** syntax 

        (function () {
          codes
        }) ()

          ** same can be done on arrow function syntax.... just wrapp the arrow function in an ()

    ** USE CASE: async await uses this concept

**** ONLY ONE IIFE would run inside a single JS file.... and it CANNOT BE REUSED

*/

(function() {
  console.log("will only run once")
})() // will only run once


// arrow function syntax

// (() => {
//   console.log("will only run once")
// })() // will only run once

// named function syntax

// (function name() {
//   console.log("will only run once")
// })() // will only run once