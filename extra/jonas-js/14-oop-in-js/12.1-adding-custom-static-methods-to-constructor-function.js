/* 

- we can add custom static functions to a constructor function from outside the function by just CHAINING THE METHOD without using PROTOTYPE PROPERTY


*/

const Person = function(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName 
}

// adding custom static function 

Person.custom_static = function() {
  console.log(`Hello ${this.firstName}`)
  
}

const tom = new Person("Tom", "Jerry")

console.log(Person.custom_static()) // Hello undefined

console.log(tom.custom_static()) // error; error; static method only works on chainng it with the ES6 class/ constructor functions.... and not on objects/instances created from it....