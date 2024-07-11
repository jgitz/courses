/* 

- steps for an inheritance of properties from PARENT CONSTRUCTOR FUNCTION to CHILD CONSTRUCTOR FUNCTION 

    ** STEP 1: define parent constructor function with it properties 

    ** STEP 2: outside parent constructor add METHODS to the parent using <parent>.prototype.<method>

    ** STEP 3 : define the child constructor function with PROPERTIES OF PARENT CONSTRUCTOR FUNCTION as ARGUMENTS 

    ** STEP 4 : INSIDE CHILD CONSTRUCTOR FUNCTION call the PARENT CONSTRUCTOR FUNCTION USING CALL METHOD 

        <parent_constructor_function>.call(this, <argument1>, <argument2>)

        ** call method will set the THIS KEYWORD of the parent to the THIS EMPTY OBJECT of the CHILD CONSTRUCTOR FUNCTION (because when child is called using NEW.... an empty object will be created)

        ** if no call method was used.... then the this keyword will HAVE UNDEFINED value in strict mode as this object of a REGULAR FUNCTION call is set to UNDEFINED 
  
  STEP 5: oustide the child class do the following

      <child>.prototype = Object.create(<Parent>.prototype)

      ** this is the STEP which makes INHERITANCE OF PARENT METHODS on the CHILD possible 

  STEP 6: ONLY AFTER step 5 the methods for the child class should be added via <child>.prototype.<method>

  STEP 7: but the step 6 has one problem

      ** USUALLY the <child>.prototype.constructor points to the CHILD CONSTRUCTOR.... BUT 

        ** due to STEP 5 now it points to the PARENT constructor function due to PROTOTYPE CHAIN lookup

        ** to rectify this add the following line 

            <child>.prototype.constructor = child


*/

// step 1
const Person = function(firstName, lastName) {
  this.firstName = firstName 
  this.lastName = lastName
}

// step 2 

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`
}

// step 3

const Student = function(firstName, lastName, rollNo) {
  //this = {}

// step 4

  Person.call(this, firstName, lastName)

  this.rollNo = rollNo
}

// step 5 

Student.prototype = Object.create(Person.prototype) // ** this make the prototype of parent to inherit to the child..... and here parent prototype in NOT COPIED.... instead it is linked to the child

// step 6

Student.prototype.intro = function() {
 console.log(`hi! I'm ${this.firstName} ${this.lastName} and my roll No is ${this.rollNo}`)
}

// step 7

Student.prototype.constructor = Student;

const emmanuel = new Student("Emmanuel", "Joseph", 1)

console.log(emmanuel) // Student { firstName: 'Emmanuel', lastName: 'Joseph', rollNo: 1 }

console.log(emmanuel.fullName()) // Emmanuel Joseph ; child class inherits methods from parent 

console.log(emmanuel.intro()) // hi! I'm Emmanuel Joseph and my roll No is 1 ; child class uses properties from parent through inheritance

console.log(emmanuel.__proto__) // Person { intro: [Function (anonymous)] } ; prototype of the child class 

console.log(emmanuel.__proto__.__proto__) // { fullName: [Function (anonymous)] } ; ** prototype of the parent class 

console.log(Student.prototype.constructor) // [Function: Student] ; ** if NO STEP 7 is done.... the OUTPUT would've been PERSON.... due to STEP 5  