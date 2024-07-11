/* 

.... demerit of protected properties and method is that.... the protected properties and methods can be still be accessed from outside.... to rectify this..... concept of PRIVATE CLASS FIELDS and METHODS is developed in JS ES6 classes..... there are 8 fields and methods introduced in js to implement private encapsulation.... they are 

    1) PUBLIC FIELDS
    2) PUBLIC METHODS
    3) PRIVATE FIELDS
    4) PRIVATE METHODS
    5) STATIC FIELDS
    6) STATIC METHODS
    7) STATIC PRIVATE FIELDS
    8) STATIC PRIVATE METHODS

- 1) PUBLIC FIELDS: property common to all instances WITHOUT entering it as a PARAMETER inside the CONSTRUCTOR FUNCTION...

    ** to define a field as a public field.... 

      ** the PROPERTY is defined OUTSIDE THE CONSTRUCTOR FUNCTION like this..

          <property_key> = <value>;

              ** NO const or let keyword

              ** semi colon ; at the end is IMPORTANT
    
    ** PUBLIC PROPERTIES are NOT added to the PROTOTYPE.... it ONLY EXIST on the INSTANCES 

    ** eg: in the example.... TRANSACTIONS property of the class can be set as a PUBLIC FIELD 



- 2) PRIVATE FIELDS: properties defined as private fields CANNOT be accessed from outside

    ** to make any property private.... 
    
          ** define the property OUTSIDE the CONSTRUCTOR FUNCTION with a # SYMBOL at the beginning.... like this 

              #<property_name> = value;


                  ** property can also be assigned no value like this..... this is used for properties that are fed in as parameters inside constructor function.... and want to make it private..... eg: pin property in the example

                      #<property>;

- 3) PUBLIC METHODS: all the methods written outside the constructor are public method


- 4) PRIVATE METHODS: to make a private method.... just add # at the beginning of the METHOD NAME

**** FIELDS: in traditional programming languages.... PROPERTIES is known as FIELDS

**** FIELDS in js should always be defined OUTSIDE the CONSTRUCTOR FUNCITION

- 5) STATIC PUBLIC PROPERTIES: NOT DISCUSSED

- 6) STATIC PUBLIC METHODS: ordinary methods with STATIC keywords..... and can only be operated on the class itself

- 7) STATIC PRIVATE PROPERTIES: not discussed

- 8) STATIC PRIVATE METHODS: not discussed
 
*/

class AccountClass {

  #transactions = [];
  #pin;

  constructor(firstName, lastName, pin) {
    this.firstName = firstName
    this.lastName = lastName
    this.#pin = pin
  }

  deposit(amount) {
    this.#transactions.push(amount)
  } 

  withdraw(amount) {
    this.deposit(-amount)
  }

  // private method

  #fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const account1 = new AccountClass("Tom", "Jerry", 123)
account1.deposit(100)
account1.withdraw(50)

console.log(account1) /* 

AccountClass { firstName: 'Tom', lastName: 'Jerry' };

** no transaction array and pin on the instance

*/


console.log(account1.#fullName()) // SyntaxError: Private field '#fullName' must be declared in an enclosing class; ** private fields CANNOT be accessed from OUTSIDE

console.log(account1.#transactions) // SyntaxError: Private field '#transactions' must be declared in an enclosing class ; ** private fields CANNOT be accessed from OUTSIDE

console.log(account1.#pin) // SyntaxError: Private field '#pin' must be declared in an enclosing class; ; ** private fields CANNOT be accessed from OUTSIDE

