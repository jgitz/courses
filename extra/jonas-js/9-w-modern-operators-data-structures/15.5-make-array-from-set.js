/* 

- since set is iterable we can use spread operator on set inside a square [] to make array from set

   <array> = [...<set>]

*/

const number_set = new Set([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])

const number_set_array = [...number_set]

console.log(number_set_array) // [ 1, 2, 3, 4 ]