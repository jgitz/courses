/* 
- we can destructure inner array variables in a nested array

*/

const array = [1, 2, [3, 4]]

const [ , , [three, four]] = array

console.log(three, four) // 3, 4
