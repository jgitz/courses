// What are building blocks of objects?
//.. in classical programming making an object has 3 components.
//..1) class 2) object 3) reference
//..1) class consists of properties and methods

//to access the class we create an object out of it and to access that we assign a pointer/variable which we call reference.

// calling the reference activates the object and produce output

// ex

//creating a class

class Person {
	//custom method
    setValues(name,age) {
    	this.name = name; // this is used to call a parameter inside the function/object/class
    	this.age = age;
    	}
    
    printValues(){
    	console.log(this.name,this.age);
    }
    
}

var ref/*reference pointer*/= new Person() /*creating object from class*/

//q1) invoking the object
console.log("q1")
ref.setValues("Bheem",7)
ref.printValues
// didn't work on mobile.

// Other than classical approach, javascript allows us to create direct object without creating class

// here, the properties of objects are given as key:value pairs seperated by commas and has methods such as printValues inside the object 

//ex1

var person = {
	name: "Bheem",
	age: "7"
	    
}

/*q2)to see object content*/
console.log("q2")
console.log(person)

/*q3 to see the specific property of object*/
console.log("q3")
console.log(person.name)
//q4) or

console.log("q4")

console.log(person["name"]) //sometimes person.name won't work

/*q5) to add another property to the object*/

person.school = "SNDP" // ****  or use person["school"] = "sndp" **** "" around ["school"] is important even though it is a variable
console.log("q5")

console.log(person)

/*q6) to check the presence of a property name "place" inside the object named person*/

console.log("q6")

console.log( "age" in person) // will return boolean true or false 
// **** "age" "" is important even though it is a variable






