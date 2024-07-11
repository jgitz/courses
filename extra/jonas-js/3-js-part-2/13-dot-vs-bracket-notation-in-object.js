/* 
- dot usage: used to manipulate an ALREADY DEFINED PORPERTY of an object

- square bracket usage: used when 

    ** you want access a property using an expression 

    ** used to enter a NEW PROPERTY into an object

    ** when using [] notation, the new property key name should be passed in as a STRING i.e the expression value should be enclosed in ""

- object properties that doesn't exist in an object returns UNDEFINED 

  ** this can be used in if conditionals

*/


const person = {
  firstName: "tom",
  lastName: "jerry"
}

person[10 + 2] = 12 // o/p "12" : 12
person.age = 10 // o/p age: 10

console.log(person["12"]) // o/p 12

console.log(person["age"]) // 10 

// **** "" inside [] is important to pass in object keys

//** dot notation has precedence over [] notation */
