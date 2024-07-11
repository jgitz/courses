/* 

- Using OOps we make instances.... but there should be a way to access and manipulate the PROPERTIES and METHODS of an INSTANCE from outside..... and this is REALIZED by setting METHODS inside the TEMPLATE/BLUPRINT which enables us to change the internal properties of instances from outside 

- PUBLIC INTERFACES/API'S : are SPECIAL METHODS set inside the CLASS/TEMPLATE/BLUPRINT that enables to ACCESS and MANIPULATE properties of an INSTANCE from OUTSIDE

- EXAMPLE

*/

class AccountClass {
  constructor(firstName, lastName, pin) {
    this.firstName = firstName
    this.lastName = lastName 
    this.pin = pin
    this.transactions = [] // **** we can set any properties to this object EVEN IF that property in NOT fed into the constructor as PARAMETHER 
  }

  // ** PUBLIC INTERFACE:  DEPOSIT and WITHDRAW methods below are PUBLIC INTERFACE that can MANIPULATE the TRANSACTIONS property of the instance

  deposit(amount) {
    this.transactions.push(amount)
  } // add the deposit amount from the account to transaction array as NEGATIVE value

  withdraw(amount) {
    this.deposit(-amount)
  } // add the withdrawn amount from the account to the transaction array as NEGATIVE value

}

// MAKING ACCOUNT INSTANCE 

const account1 = new AccountClass("Emmanuel", "Joseph", 123)
console.log(account1) /* 

AccountClass {
  firstName: 'Emmanuel',
  lastName: 'Joseph',
  pin: 123,
  transactions: []
}

*/

// ** maipulating the transaction array of the account1 instance from outside using public interface methods deposit and withdraw

account1.deposit(200)
account1.withdraw(150)
console.log(account1) /* 

AccountClass {
  firstName: 'Emmanuel',
  lastName: 'Joseph',
  pin: 123,
  transactions: [ 200, -150 ]
};

** transactions array fille with values

*/

/* 

**** but some properties on an instance is still can be accessed and manipulated from outside

  ** here in the above example.... pin can be changed from outside and this is UNDESIRABLE

  ** to PREVENT this we need PROPERTIES AND METHOD ENCAPSULATION

*/