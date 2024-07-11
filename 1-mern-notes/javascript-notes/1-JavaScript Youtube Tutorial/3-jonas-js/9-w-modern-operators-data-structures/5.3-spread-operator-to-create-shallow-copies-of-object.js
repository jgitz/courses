/* 

- previously we used Object.assign() to make shallow copies of an object..... we can instead use spread operator

*/

const object = {
  one: 1, two: 2, three: 3
}

const objectCopy = {
  ...object
}

console.log(objectCopy) // { one: 1, two: 2, three: 3 }