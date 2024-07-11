/* 

- we CANNOT directly loop over the object values.... instead we can use Object.values(<object>) method to create an ARRAY of objects and loop over the array using FOR OF


*/

const object = {
  one: 1,
  two: 2, 
  three: 3,
  four: 4
}

console.log(Object.values(object)) // [ 1, 2, 3, 4 ]

for (let value of Object.values(object)) console.log(value) /* 

1
2
3
4

*/