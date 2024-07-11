/* 

- GETTERS and SETTERS in ES6 classes

    ** get and set methods can be used inside es6 classes too

    ** USING the set method name SAMW as that of the EXISTING property name inside the CLASS will enable to trigger the SET METHOD whenever we input the OBJECT PARAMETERS USING the NEW keyword

**** getter and setter can only use EXISTING PROPERTIES defined in the class and CANNOT be used to make NEW PROPERTIES like in case of getters and setters in objects



*/

class Person {
  
  constructor(name, mobileNumber) {
    this.name = name
    this.mobileNumber = mobileNumber
  }

  // used to check the input mobile number and validate.... _ convention is used inside the set method since same set method name and property name can create error due to infinite loop



  set mobileNumber(value) {

    if (value.toString().length !== 10) {
      throw new Error("mobile number have to be 10 digits")
    }

    this._mobileNumber = value
  }

  // this get method is used to obtain mobile number by using <object>.mobileNumber command as real mobile number is stored in <object>._mobileNumber

  get mobileNumber() {
    return this._mobileNumber
  }



}

const tom = new Person("tom", 9495013346)

console.log(tom) /* 

Person { name: 'tom', _mobileNumber: 9495013346 } 

; ** the property is _mobileNumber with _ is where mobile number is stored in main object....

  ** if you want to obtain the property as 
   tom.mobileNumber.... with on _ .... use a get method with its return value pointing to this._mobileNumber

*/

console.log(tom.mobileNumber) // 9495013346

// we can change the existing property value using the SET METHOD of the CLASS by chaining it on the OBJECT like this

tom.mobileNumber= 1111111111

console.log(tom) /* 

Person { name: 'tom', _mobileNumber: 1111111111 };

** mobile number is changed

*/



// wrong mobile number case

const wrongMobileUser = new Person("wrong", 1234)

/* 

o/p: Error: mobile number have to be 10 digits

** output automatically comes without a console log 

*/



