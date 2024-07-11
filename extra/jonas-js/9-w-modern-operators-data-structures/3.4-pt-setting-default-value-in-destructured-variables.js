/* 

- we can set a default value for destructured variable for array data obtained from unknown sources such as API
..... so that no variables show undefined

*/

const array = [1,2,3]

const [one = 0, two = 0, three = 0, four = 0, five = 0] = array // default value is set to zero

console.log(one, two, three, four, five) // 1 2 3 0 0 ; zero is assigned to variables four and five.... if no default value is set.... four and five would become undefined