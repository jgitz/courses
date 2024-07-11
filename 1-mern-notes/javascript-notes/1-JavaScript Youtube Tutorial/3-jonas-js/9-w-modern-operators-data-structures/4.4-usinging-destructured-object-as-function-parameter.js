/* 

- use case of object destructuring is that we can use the destructured object inside function parameter and arguments

*/

function sum({one, two, three, four}) {
  console.log(`the sum is ${one + two + three + four}`)
} // parameters are defined as a destructured objects

sum({
  one:1,
  two:2,
  three:3,
  four:4
}) // arguments don't need to be in order


// we can also set default values to the parameter object in function definition....

// this is a good technique to follow if a function accepts a lot of parameters



