/* 

- we can add custom static method into ES6 classes by adding the prefix STATIC before the method declaration inside the class

*/

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName 
  }

  static custom_static_method() {
    console.log(`Hello ${this.firstName}`)
  }
}

const tom = new Person("Tom")

console.log(Person.custom_static_method()) // Hello undefined

console.log(tom.custom_static_method()) // error; static method only works on chainng it with the ES6 class/ constructor functions.... and not on objects/instances created from it....