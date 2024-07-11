/* 

- ES6 CLASSES: 

    ** is a SYNTACTIC SUGAR to make is easier for programmers from traditional classical programming language to implement oops in js

    ** a CLASS has the following elements 

          ** declared using CLASS keyword

          ** name starts with UPPERCASE 

          ** inside a class block {}.... the class properties are written inside a CONSTRUCTOR METHOD (function)

          ** it is INSIDE THE constructor function, we GIVE PARAMETERS and THE KEY AND VALUES using THIS

          ** the constructor method follows every step of that of PROTOTYPAL inheritance method of oops

      ** SYNTAX

              class <ClassName> {
                constructor(<param1>, <param2>) {
                  this.<param1> = <value>
                  this.<param2> = <value>
                }
              }

              ** instances are made by calling classes using TRADITIONAL NEW keyword

              ** whenever instances are called.... the constructor functions inside the class is the one which works behind the scenes to make objects/instances

**** classes can also be stored inside an EXPRESSION VARIABLE..... but prefer using of class without storing it in variable

*/ 


// using ES6 Classes

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

// instance/ object creation

const emmanuel = new Person("Emmanuel", "Joseph")

console.log(emmanuel) /* 

Person { firstName: 'Emmanuel', lastName: 'Joseph' }

*/




