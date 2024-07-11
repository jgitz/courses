/* 

- PROTECTED PROPERTIES AND METHODS: methods and properties of a class or instance can be protected from ACCIDENTAL manipulation by developers using 

    ** _ before the properties/methods which you want to protect

    ** _ only means this property or method should not be touched or altered by the developer

    ** protected properties and methods are still visible if you console log the instances

    **** the protected properties and methods can still be manipulated from outside

- since the protecte properties can still be overwritten from outside.... to PREVENT THIS 

    ** use ANOTHER METHOD to ACCESS the protected property

    ** NAMING CONVENTION of this METHOD SHOULD BE 

        get<protectec_property_name>() {
          codes
        }


*/

// here we want to protect the pin property and transactions array

class AccountClass {
  constructor(firstName, lastName, pin) {
    this.firstName = firstName
    this.lastName = lastName

    this._pin = pin // pin property is protected 
    this._transactions = [] // transaction property is protected
  }

  // public interface 

  deposit(amount) {
    this._transactions.push(amount)
  }
  
  withdraw(amount) {
    this.deposit(-amount)
  }
  
  // ** written to access the PROTECTED TRANSACTION PROPERTY

  getTransactions() {
    return this._transactions
  }

}

const account1 = new AccountClass("Tom", "Jerry", 123)
account1.deposit(100)
account1.withdraw(50)

console.log(account1) /* 

AccountClass {
  firstName: 'Tom',
  lastName: 'Jerry',
  _pin: 123,
  _transactions: [ 100, -50 ]
};

** properties with _ means they should not be touched

*/

// accessing the protected property with custom made method 

console.log(account1.getTransactions()) //   [ 100, -50 ]