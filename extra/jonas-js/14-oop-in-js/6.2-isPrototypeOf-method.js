/* 

- isPrototypeOf method :

    ** is a method CHAINED onto CONSTRUCTOR FUNCTION prototype property with aN INSTANCE/ OBJECT of the constructor function as ARGUMENT

    ** it returns a boolean which checks IF THE PROTOTYPE property is the PROTOTYPE of the OBJECT

**** EVEN THOUGH prototype object lies on CONSTRUCTOR function.... its REAL owner is the OBJECTS/instances.... actually it is prototype of OBJECT and NOT of the constructor function

*/

const Person = function(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const emmanuel = new Person("Emmanuel", "Joseph")

// isPrototype of method check

console.log(Person.prototype.isPrototypeOf(emmanuel)) /* 

true ;

i.e the prototype of person is prototype of the object emmanuel which was made from it

*/

console.log(Person.prototype.isPrototypeOf(Person)) /* 

false;

**** Prototype of constructor function is NOT it's prototype.... INSTEAD it is the prototype of the OBJECT/INSTANCES created from it

*/

// to see prototype of Person constructor do

console.log(Person.__proto__) // {}