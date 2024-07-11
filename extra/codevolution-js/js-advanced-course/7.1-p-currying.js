/* 
- 3 argument addition function without currying
*/

function add_without_currying(a,b,c) {
  const sum = a + b + c

  console.log(sum)
}

add_without_currying(1, 2, 3) // o/p 6

// ** the above function can be made into a curry function using library lodash with _.curry(<function>) method

/* 
- 3 argument addition function with currying
*/

function add_with_currying (a) {
  return function (b) {
    return function (c) {
      return (a + b + c)
    }
  }
}

console.log(add_with_currying(1)(2)(3)) // o/p 6

