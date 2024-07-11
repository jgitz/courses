/* 
- destructuring is an ES6 feature that give a shortcut syntax to easily assign each element of an array to different variables

*/

// traditional destructuring 

const array = [1,2]

const one = array[0]
const two = array[1]

console.log(one, two) // 1, 2

// es6 destructuring

const array2 = [3, 4, 5]

const [three, ,five] = array2 // if you want to leave an element from destructuring.... leave a space.... here element 4 is left

console.log(three, five) // 3, 5
