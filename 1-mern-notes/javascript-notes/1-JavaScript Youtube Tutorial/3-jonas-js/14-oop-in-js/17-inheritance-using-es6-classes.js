/* 

- inheritance of properties and methods between two ES6 CLASSES can be achieved via 2 things 

    1) use of EXTENDS KEYWORD: used to specify the PARENT CLASS on the CHILD CLASS 

    2) use of SUPER FUNCTION: used INSIDE the CHILD class to initiate this object in the child 

      ** super function takes the ARGUMENTS of PARENT constructor

      ** calling super function will automatically inherits the parent properties to the child 

- STEPS to use INHERITANCE between PARENT and CHILD CLASSES 

    **STEP 1: define parent es6 class.... set properties using constructor functions.... set methods by defining it OUTSIDE the constructor function 

    ** STEP 2: declare child function with EXTENDS KEYWORD and specify parent class after that like this 

        class <Child> extends <Parent> {

        }

        ** now the parent class constructor function is officially linked to the child class 

    ** STEP 3: INSIDE the child class call the CONSTRUCTOR FUNCTION with arguments from PARENT as well as the argument for child 

    ** STEP 4: INSIDE the child CONSTRUCTOR FUNCTION.... call SUPER FUNCTION with arguments of PARENT CONSTRUCTOR FUNCTION 

    ** STEP 5: INSIDE the child CONSTRUCTOR FUNCTION.... AFTER the SUPER FUNCTION ..... specify the CHILD properties using this. 

    ** STEP 6: OUTSIDE the child constructor function.... define the child method 

**** CASE 1 : specifying EXTENDS and linking the PARENT class itself enables us to USE the CHILD CLASS to create instances from PARENT properties and method WITHOUT DEFINING the CHILD CONSTRUCTOR function 




*/

// step 1

class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName 
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

}



/* step 2 */class Student extends Person {

/* step 3 */constructor(firstName, lastName, rollNo) {

// step 4 
    super(firstName, lastName)
// step 5
    this.rollNo = rollNo
  }

// step 6

  intro() {
    return `hi! I'm ${this.firstName} ${this.lastName} and my rollNo is ${this.rollNo}`
  }



}

const emmanuel = new Student("Emmanuel", "Joseph", 1)

console.log(emmanuel) // Student { firstName: 'Emmanuel', lastName: 'Joseph', rollNo: 1 }

console.log(Student.prototype) // Person {} ; ** for more output.... use browser console 

console.log(emmanuel.fullName()) // Emmanuel Joseph

console.log(emmanuel.intro()) // hi! I'm Emmanuel Joseph and my rollNo is 1


// **** CASE WHERE WE DON'T NEED constructor function in the child class

class Person_case {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName 
  }

  fullName() {
    return `hi! my name in ${this.firstName} ${this.lastName}`
  }
}

class Student_case extends Person_case {
// no need of anything here if you only need to use properties and methods from the parent class
}

// using the child class to create an instance using properties and methods of parent class

const tom = new Student_case("Tom", "Jerry")

console.log(tom) // Student_case { firstName: 'Tom', lastName: 'Jerry' }

