/* 

- An OBJECT/INSTANCE created from a CONSTRUCTOR FUNCTION holds two types of properties 

    1) the OBJECTS own properties

    2) properties inherited from the PROTOTYPE property of the CONSTRUCTOR function which is strored in __proto__ property of the objec

      ** to distinguish these two properties.... hasOwnProperty is used

- hasOwnProperty METHOD: 

        ** is used on OBJECT/INSTANCES

        ** takes property keys as ARGUMENT

        ** checks if the property argument is direct property of the object... if it is direct property OUTPUT is TRUE.... if it is PROTORYPE inherited property it outputs FALSE

        ** SYNTAX:

              <object_variable>
              .hasOwnProperty("property_key")


*/

const Person = function(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

// firstName and lastName are direct properties of the object created from above constructor function 

Person.prototype.species = "Homo Sapiens"

// species is an inherited property to the objects made from the Person constructor function

const emmanuel = new Person("Emmanuel", "Joseph")

console.log(emmanuel)/* 

Person { firstName: 'Emmanuel', lastName: 'Joseph' }

*/

console.log(emmanuel.__proto__) /* 

{ species: 'Homo Sapiens' }

*/

console.log(emmanuel.species) // Homo Sapiens

// using hasOwnProperty on emmanuel object

console.log(emmanuel.hasOwnProperty("firstName")) // true
console.log(emmanuel.hasOwnProperty("lastName")) // true 
console.log(emmanuel.hasOwnProperty("species")) // false



