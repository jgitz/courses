/* 

.... so far we've studied 2 methods by which objects can be created and assigne prototypal inheritance.. those two methods are
      1) constructor function
      2) es6 class

.... now there is a third way to create an OBJECT and assign prototypal inheritance using Object.create() method

- object.Create() method USAGE:

      ** it is a METHOD that takes AN OBJECT as an ARGUMENT.... such that the contents of ARGUMENT object will become PROTOTYPE method

      ** step1: create a BLUEPRINT OBJECT and store it in a VARIABLE of WHICH naming convention starts in UPPER CASE 

      ** step2: inside the BLUEPRINT OBJECT.....write a FUNCTION to input the properties of the INSTANCES YOU want to create

          ** ANY NAME can be given to the function 

      ** to create INSTANCES from the BLUEPRINT in two steps 

        step1: use Objec.create() to link the blueprint object like this

            <instance_variable> = Object.create(<blurprint_object>)

                ** now an empty object is created

        step2: chain the input function from the blueprint object over the INSTANCE VARIABLE to DYNAMICALLY add properties to the INSTANCE like this 

            <instance_variable>.<input>(<property1>, <property2>)

**** any METHOD written inside the BLUEPRINT object is INHERITED by the OBJECT/INSTANCES created from the blueprint object..... and can be accessed by chaining __proto__ property on the OBJECT/INSTANCE

**** there is NO .prototype PROPERTY on blueprint object like in the case of es6 class or constructor function

**** this is the least used method in js OOPS and commonly used are ES6 class and CONSTRUCTOR functions

*/

// blueprint object

const Person = {
  // method to dynamically add properties

  input(firstName, lastName) {
    this.firstName = firstName 
    this.lastName = lastName
  }, // any name can be used for input function

  // setting a method you want to inherit to objects/instances

  fullName() { // this is a prototype method you want to inherit
    return `${this.firstName} ${this.lastName}`
  }
}

// step 1: to link the prototype method having blueprint object to the instance

const tom = Object.create(Person)

console.log(tom) // {}

console.log(tom.fullName()) // undefined undefined

console.log(Person.prototype) // undefined  ; ** because no .prototype property is made on the blueprint object

console.log(tom.__proto__) /* 

{ input: [Function: input], fullName: [Function: fullName] };

** Object.create function links the argument object to the __proto__ property of the INSTANCES

*/

// step 2: add properties to the instance dynamically by chaining the input function

tom.input("Tom","Jerry")

console.log(tom) // { firstName: 'Tom', lastName: 'Jerry' }

console.log(tom.fullName()) // Tom Jerry