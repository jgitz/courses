/* 
<array>.shift("item") : is used to REMOVE a new item to the START of the array

<array>.unshift() : is used to ADD the first element of the array

**** modifies the original array

*/

let num = [1, 2, 3]

// adding new item to start using UNSHIFT

num.unshift("a") 

console.log(num) //  [ 'a', 1, 2, 3 ] ***** modifies original array

// removing the first element of the array using SHIFT

num.shift()

console.log(num) // [ 1, 2, 3 ]

// ***** modifies the original array