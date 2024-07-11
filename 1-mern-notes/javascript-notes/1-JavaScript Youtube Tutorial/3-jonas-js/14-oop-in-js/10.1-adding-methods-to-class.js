/* 

- ADDING METHODS IN CLASS: 

    ** METHODS inside a class is added OUTSIDE the constructor funciton

    ** methods DON'T need to have function keyword

- ADVANTAGE OF METHODS ADDED IN A CLASS 

    ** the methods added inside a class is DIRECTLY ADDED to the PROTOTYPE property of the CLASS/constructor function
    
    ** i.e unlike in prototypal inheritance method..... there is no need of a SEPARATE line of code TO ADD METHODS to the PROTOTYPE PROPERTY using DOT notatation

**** NO need of COMMAS between multiple method functions inside CLASS

*/

// methods added to a class 

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const emmanuel = new Person("Emmanuel", "Joseph")

console.log(emmanuel) /* 

Person { firstName: 'Emmanuel', lastName: 'Joseph' };

** fullName method is not displyed because it is not direct property and it lies in prototype property.... to see it use the below in BROWSER

    emmanuel.__proto__

*/

console.log(Person.prototype) /*

constructor: class Person
fullName: ƒ fullName()
[[Prototype]]: Object

 */
console.log(emmanuel.__proto__) /* 

{constructor: ƒ, fullName: ƒ}
constructor: class Person
fullName: ƒ fullName()
[[Prototype]]: Object

*/
console.log(emmanuel.fullName()) // Emmanuel Joseph

// **** to get the correct output.... do the above inside BROWSER CONSOLE....