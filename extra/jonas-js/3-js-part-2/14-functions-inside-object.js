/* 
- METHOD : functioninside object is called method


*/

// different ways to declare methods inside object

const test = {
  name: "jerry",

  method1: function () {
    return "method 1 here"
  },

  method2() {
    return ("method 2 here")
  }, // no need of function keword here

  method3: () => {
    return ("method 3 here")
  }



}

console.log(test.method1()) // method 1 here
console.log(test.method2()) // method 2 here
console.log(test.method3()) // method 3 here

// **** CONVENTION: DON'T use arrow function to define a method inside an object.... BECAUSE it has NO THIS object