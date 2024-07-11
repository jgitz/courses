/* 
- we use Object.keys(<object>) to make an array of object keys and we can use FOR OF loop to LOOP over the array

*/

const object = {
  one: 1,
  two: 2, 
  three: 3,
  four: 4
}

console.log(Object.keys(object)) // [ 'one', 'two', 'three', 'four' ]

// looping with FOR OF

for (let key of Object.keys(object)) console.log(key);/* 

one
two
three
four

*/