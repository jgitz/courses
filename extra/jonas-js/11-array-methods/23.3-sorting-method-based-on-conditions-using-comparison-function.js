/* 

** youtube link : https://www.youtube.com/watch?v=nq0DC5M3Kc8

- we can use the different comparision operator conditions to sort different elements based on certain conditions

**** mutates the original array

*/

const array_of_objects = [
  {name:"dino", age: 6, gender: "male",},
  {name:"betty", age:2, gender:"female",},
  {name:"cindy", age:2, gender:"female",},
  {name:"abu", age:10, gender: "male",}
]

// sort male first

const maleFirst = array_of_objects.sort((a) => {
  if (a.gender === "male") return -1
  return 1
})

console.log(maleFirst) /* 

[
  { name: 'abu', age: 10, gender: 'male' },
  { name: 'dino', age: 6, gender: 'male' },
  { name: 'betty', age: 2, gender: 'female' },
  { name: 'cindy', age: 2, gender: 'female' }

*/ 

// sort by ascending order of name

const nameAscending = array_of_objects.sort((a, b) => {
  if (a.name < b.name ) return -1 // ** can't use substraction method because elements are string
  return 1
})

console.log(nameAscending) /* 

[
  { name: 'abu', age: 10, gender: 'male' },        
  { name: 'betty', age: 2, gender: 'female' },     
  { name: 'cindy', age: 2, gender: 'female' },     
  { name: 'dino', age: 6, gender: 'male' }
]

*/

// sort by descending order of name 

const nameDescending = array_of_objects.sort((a, b) => {
  if (a.name > b.name) return -1
  return 1
})

console.log(nameDescending) /* 

[
  { name: 'dino', age: 6, gender: 'male' },        
  { name: 'cindy', age: 2, gender: 'female' },     
  { name: 'betty', age: 2, gender: 'female' },     
  { name: 'abu', age: 10, gender: 'male' }
]

*/
