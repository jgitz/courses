/* 
- CONSTRUCTOR FUNCTION : is a pattern/technique added to js to PROGRAMATICALLY/DYNAMICALLY create an OBJECT/INSTANCE using a FUNCTION 

- NAMING CONVENTION of CONSTRUCTOR function: 

    ** a function expression is used to create a function

    ** NO ARROW function is used to make constructor function..... ALWAYS use FUNCTION keyword 

    ** function variable starts with UPPERCASE 


- HOW to CALL a constructor function? 

      ** calling of constructor function is preceeded by NEW keyword

      ** followed by construction function expression name and arguments(if any) in brackets ()

- WHAT happens in BACKGROUND when constructor function is CALLED using NEW keyword 

      ** step1: a new EMPTY OBJECT is created inside the FUNCTION

      ** step 2: EMPTY OBJECT is assigned to the THIS keyword inside the function 

      ** step 3: newly created OBJECT is LINKED to a PROTOTYPE (later??)

          ** the newly created object will be given a __proto__ property and assign its value as PROTOTYPE property of constructor function

      ** step 4: the function automatically RETURNS the OBJECT UNLESS we EXPLICITELY returns something else 

          **** no need to use RETURN KEYWORD to return the this object inside a constructor function.... it happens automatically

- HOW constructor function is used to create OBJECT/INSTANCES to simulate OOP?

      ** since an empty object is created INSIDE the constructor function when it is invoked using new keyword

      ** WE can use this object and add properties to it using DOT . chaining 

      ** since the object is assigned to THIS.... INSIDE the CONSTRUCTOR function we can use the following to add properties and values 

          this.<key> = <value>

              **** = is used and not :

      ** finally this object is returned

      ** we can hence make many instances/objects using multiple CONSTRUCTOR function invocations using NEW keywords and store it in DIFFERENT VARIABLES 

***** DON'T assign METHODS to constructor function..... even though it is possible it is not the best practice..

    ** we use prototype to add methods to the constructor function (later??)



***** CONVENTION is to have constructor PARAMETERS and KEYS have the same name 

***** to access the return value we have to store it in a variable and console log it

      

*/

// EXMPLE 

// constructor function creation
"use strict";

const Person = function(firstName, lastName) {
  // this = {} is created here on function invocation
  this.firstName = firstName; // convention parameter and key name are same
  this.lastName = lastName;
} 

// calling/invocation of constructor function using new keyword 

const person = new Person("Emmanuel", "Joseph");

console.log(person) /* 

Person { firstName: 'Emmanuel', lastName: 'Joseph' }; 

*/

// creation of objects/instances from constructior function 

const jerry = new Person("Jerry", "Joseph")
const teddy = new Person("Teddy", "Thomas")
const amal = new Person("Amal", "Raj")

console.log(jerry) /* 

Person { firstName: 'Jerry', lastName: 'Joseph' }

*/

console.log(teddy) /* 

Person { firstName: 'Teddy', lastName: 'Thomas' }

*/

console.log(amal) /* 

Person { firstName: 'Amal', lastName: 'Raj' }

*/



