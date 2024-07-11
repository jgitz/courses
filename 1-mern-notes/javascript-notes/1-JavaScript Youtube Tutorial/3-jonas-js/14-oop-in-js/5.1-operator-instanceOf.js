/* 

- instanceOf OPERATOR: is used to test if an OBJECT is an instance of a CONSTRUCTOR FUNCTION

    ** it returns BOOLEAN

** SYNTAX 

    console.log(<object_variable> instanceof <constructor_variable>)

        **** NO CAMELCASE in instanceof



*/

const Person = function (firstName, lastName){
  this.firstName = firstName
  this.lastName = lastName
}

const jerry = new Person("Jerry", "Joseph")

const jinja = "jinja"

console.log(jerry instanceof Person) // true 

console.log(jinja instanceof Person); // false

// **** NO camel case for instanceof operator

