/* 

- Everything in js is an object created from a constructor function.... that includes any ARRAY, OBJECT, FUNCTION etc created in js

- CONSTRUCTOR property: .constructor can be chained to anything in js to find the CONSTRUCTOR FUNCTION from which it was mads

    <anything>.constructor

    ** CONSTRUCTOR PROPERTY is store in the PROTOTYPE property of the constructor function

*/

// array

const array = [1, 2, 3, 4, 5]

console.log(array.constructor) // [Function: Array]

// string

const string = "hi hi"

console.log(string.constructor) // [Function: String]

// object 

const object = {
  one: 1, 
  two: 2
}

console.log(object.constructor) // [Function: Object]

// funciton

const _function = function() {
return "hi"
}

console.log(_function.constructor) // [Function: Function