/* 

*/

// step 1: create the Parent Object Template

const Person = {

// step 2: add a method to dynamically set parent properties

  input(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  },

// step 3: add parent methods

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

}

// step 4 : create the child with PARENT as PROTOTYPE using Object.create(<Parent>)

const Student = Object.create(Person)

// step 5 : add an input method to CHILD OBJECT with parameters from PARENT as well as CHILD specific properties

Student.input = function (firstName, lastName, rollNo) {
  // this = {}

// step 6 : to INHERIT properties from PARENT.... call the input method on parent with.CALL METHOD.... set the this keyword to empty this of child object.... and add parent properties as argument

  Person.input.call(this, firstName, lastName)

// step 7: add child property to this object   

  this.rollNo = rollNo
}

// step 8: add child method via chaining

Student.intro = function() {
  return `hi! my name is ${this.firstName} ${this.lastName} and my roll number is ${this.rollNo}`
}

// make instance using CHILD METHOD

const emmanuel = Object.create(Student)
console.log(emmanuel) // {}

// setting properties to instance

emmanuel.input("Emmanuel", "Joseph", 1)
console.log(emmanuel) // { firstName: 'Emmanuel', lastName: 'Joseph', rollNo: 1 }

// checking working of parent object method on instance

console.log(emmanuel.fullName()) // Emmanuel Joseph

// checking working of child object methods on instance

console.log(emmanuel.intro()) // hi! my name is Emmanuel Joseph and my roll number is 1
