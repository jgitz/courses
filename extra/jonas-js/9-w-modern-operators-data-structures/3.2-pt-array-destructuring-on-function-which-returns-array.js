/* 
- we can do array destructuring on a function returning an array
*/

function test() {
  return [1, 2]
}

const [one, two] = test()

console.log(one, two) // 1,2 ; destructured the variables from the function return without calling it