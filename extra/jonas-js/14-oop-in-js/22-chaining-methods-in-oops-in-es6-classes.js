/* 

- CHAINING METHODS IN ES6 CLASSE: methods listed inside es6 classes can be chained by:

      ** RETURNING the THIS OBJECT inside each method you want to chain 

*/

// making deposit and withdraw methods chainable 

class AccountClass {
  #transactions = [];
  #pin; 
  constructor(firstName, lastName, pin){
    this.firstName = firstName
    this.lastName = lastName
    this.#pin = pin
  }

  deposit(amount){
    this.#transactions.push(amount)
    return this // returning this object to make this chainable
  }

  withdraw(amount){
    this.deposit(-amount)
    return this // returning this object to make this chainable 
  }

  getTransactions() {
    return this.#transactions
  }
}

const account1 = new AccountClass("Tom", "Jerry", 123)
console.log(account1) // AccountClass { firstName: 'Tom', lastName: 'Jerry' }

// chaining multiple deposit and withdraw methods

account1.deposit(100).withdraw(50).withdraw(50).deposit(100)

console.log(account1.getTransactions()) // [ 100, -50, -50, 100 ] ; chaining is successful