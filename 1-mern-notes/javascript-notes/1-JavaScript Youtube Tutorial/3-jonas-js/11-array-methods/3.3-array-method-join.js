/* 

JOIN METHOD : used to add a separator between the array elements


** returns a STRING of array elements with SEPARATOR in between

** if no separator is passed comma is default separator

** DOES NOT mutate original array

*/

const array = [1, 2, 3, 4, 5]

console.log(array.join("*")) // 1*2*3*4*5

console.log(array) // [ 1, 2, 3, 4, 5 ] ; ** does not mutate original array