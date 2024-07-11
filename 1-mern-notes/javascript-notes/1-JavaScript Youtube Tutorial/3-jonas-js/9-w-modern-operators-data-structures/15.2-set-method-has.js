/* 

- to check presence of an element inside a set use 

    <set>.has(element)

      ** output is true or false

*/

const number_set = new Set([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])

console.log(number_set.has(1)) // true
console.log(number_set.has(5)) // false