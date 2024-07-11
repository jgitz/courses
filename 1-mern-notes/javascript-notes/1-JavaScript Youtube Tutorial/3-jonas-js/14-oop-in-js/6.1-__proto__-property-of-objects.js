/* 

- __proto__ property: 

*/

const Person = function(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const emmanuel = new Person("Emmanuel", "Joseph")

// __proto__ property of immanuel 

console.log(emmanuel.__proto__) /* 

{ fullName: [Function (anonymous)] } ; ** is the prototype property of the CONSTRUCTOR prototype 

*/

// checking if constructor prototype property content is same as object __proto__ content 

console.log(emmanuel.__proto__ === Person.prototype) // true; ** yes... prototype property of constructor function is same as __proto__ property of object..... thats the reason object can directly chain prototype methods of the constructor function