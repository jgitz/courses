/* 

function reference: just passing in the function name without brackets

*/

function outer() {
  const a = 100
  console.log(a)
}

console.log(outer) // o/p: [Function: outer] // this is output of function reference

/* 
function calling: is invoking the function with the () and the codes inside the function block runs
*/

console.log(outer()) // o/p 100 undefined // undefined because there's no return value
