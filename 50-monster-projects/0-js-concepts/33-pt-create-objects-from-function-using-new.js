/* 

.... you can dynamically create object from a function using NEW keyword

..... INSIDE the function 

      - the OBJECT KEYS we want is given in the form 

        this.<key>

      - the object key VALUES we want is fed into the function as PARAMETERS/ARGUMENTS

      - each this.key is assigned to corresponding PARAMETER variables inside the FUNCTION

..... then using FUNCTION EXPRESSION and NEW KEYWORD and funciton name..... we can invode the function with object value as arguments to create OBJECTS 



*/

/* 

- create student details object using function with first name, last name and roll number 

*/

function student(firstNameParam, lastNameParam, RollNoParam) {
  this.firstName = firstNameParam;
  this.lastName = lastNameParam;
  this.rollNo = RollNoParam;
}

const Emmanuel = new student("Emmanuel", "Manuel", 1);

console.log(Emmanuel) /* o/p

student { firstName: 'Emmanuel', lastName: 'Manuel', rollNo: 1 }

*/

// ** object and array can be initialized with the keyword CONST because they both use REFERENCE as values.... hence value change DON'T affect them



