/* 

- even though objects are NOT iterables.... since 2018..... spread operators works on objects too.... 

- spread operator allows to spread the properties of an object

*/

const object = {
  three: 3,
  four: 4, 
  five: 5
} 

const newObject = {
  one: 1, two: 2, ...object
}


console.log(newObject) /* 
{ one: 1, two: 2, three: 3, four:
 4, five: 5 }
*/

