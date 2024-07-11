/* 

- PROTOTYPE: Every object in js has a PROPERTY called prototype. since function is also an object behind the scenes a function also has a property called PROTOTYPE

    ** so a constructor function too has a property called protorype 

    ** EVERY OBJECT made using a CONSTRUCTOR FUNCTION will get ACCESS to methods DEFINED INSIDE the prototype property of the constructor function from which it was made

    ** to see prototype property of a function.... use command 

        <function>.prototype

    ** we can add methods to a prototype property of a function like this 

        <function>.prototype.<method_name> = function () {

        }

    ** we can use methods of a prototype of a constructor function directly on an OBJECT/INSTANCE made from the constructor function like this 

       <object_variable>.<constructor_prototype_method>()

          **** the this keyword now corresponds to the OBJECT on which the method is called

***** the PROTOTYPE property of a CONSTRUCTOR FUNCTION is NOT the prototype of the constructor function..... because

        ** the PROTOTYPE property of constructor function is ACTUALLY used by the OBJECTs made using the constructor function

        ** the object is able directly chain the prototype methods of constructor function because....

            ** these methods of CONSTRUCTOR prototype property is STORED inside the __proto__ property of the OBJECT/INSTANCES



*/


const Person = function (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

// to see prototype function of person constructor function

console.log(Person.prototype) // {} ; empty as there is no methods are there

// adding a property into prototype 

Person.prototype.hi = "hi"

console.log(Person.prototype) // { hi: 'hi' }

// adding a METHOD into prototype

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`
}

console.log(Person.prototype) /* 

{ hi: 'hi', fullName: [Function (anonymous)] }

*/

// checking if OBJECTS made from the constructor function can use the prototype methods of constructor function

const emmanuel = new Person("Emmanuel", "Joseph")

console.log(emmanuel) // Person { firstName: 'Emmanuel', lastName: 'Joseph' }

console.log(emmanuel.fullName()) // Emmanuel Joseph ; we can directly chain a method defined in the prototype property of the constructor function


