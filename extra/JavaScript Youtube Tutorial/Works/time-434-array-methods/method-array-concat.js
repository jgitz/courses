/* <array1>.concat(array2) : is method used add elements of 2nd array to the first

**** does not modify the original arrays

*/

let num = [1, 2, 3]

let char = ["a", "b", "c"]

console.log(num.concat(char)) // [ 1, 2, 3, 'a', 'b', 'c' ]

console.log(num) // [ 1, 2, 3 ] **** original array remains unchanged
console.log(char) // [ 'a', 'b', 'c' ] ***** original array remains unchanged



