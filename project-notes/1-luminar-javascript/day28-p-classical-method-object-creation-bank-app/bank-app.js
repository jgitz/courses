// using classical approach we cannot make direct object(js can create direct object. we do this for practice). In classical apprpoach we first create a class with method inside the class given as functions. Then we create a new object out of method. Then we give a reference name to point the object with which we access the methods inside the class.

// in this practice we have a class called banks which holds an account dataset.
// we have to create methods inside bank class to 
//validate account (to check account existance in dataset),
// authenticate, 
//balance enquiry
//fund transfer
//debited transactions details of an account
//credited transactions details of an account
//whole transaction history. Both debited and credited details

class Bank {
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }

        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },

    }

    sessions = {} // this is to flag accounts whose authentication is success
    //no need of var to assign an object

    // method to validate account number
    validate(accno) {

        return accno in this.accounts ? true : false // inside a class to call an object/method we use this. before the object/method. No need to use this. before calling of variable.
    }

    // method to authenticate into an account. Once an account successfully authenticates feed the account number into session object
    authentication(accno, password) {

        if (this.validate(accno)) {
            let password_variable = this.accounts[accno].password
            if (password == password_variable) {
                console.log(`authentication of ${accno} is successful`)
                this.sessions["user"] = accno
            }
            else {
                return console.log(`authention failed. check password of ${accno}`)
            }
        }

        else {
            return console.log(`authentication failed. ${accno} doesnot exists in the database`)
        }

    }
    // a method to get any account balance of dataset
    getBalance(accno) {

        return this.validate(accno) ? this.accounts[accno].balance : console.log(`validation failed`);

    }

    // method to find balance of already logged in user account
    balanceEnquiry() { /* here we won't use accno parameter. instead we use a combination of session object and getBalance method */
        if ("user" in this.sessions) {

            let logged_in_user_account_number = this.sessions["user"]
            console.log(`the logged in account is ${logged_in_user_account_number} and balance is:`)
            return this.getBalance(logged_in_user_account_number) // always use return in current method even if submethod has another return inside it, it won't work. 
        }

        else {
            console.log("no account is logged in. authenticate with a valid bank account")
        }
    }

    // method to transfer funds between two accounts ( here we don't use from accno because we first login to from accno, so it is in sessions object.)
    transfer(to_accno, amount) {
        let from_accno = this.sessions["user"]
        

        if (from_accno) {
            this.validate(to_accno)
            if ( from_accno !== to_accno) {

                if (this.validate(to_accno)) {
                    let old_balance = this.accounts[from_accno].balance
                    if (old_balance > amount) {
                        let debited_account_balance = old_balance -= amount
                        let transactions_debited_object = {to_accno, amount}
                        this.accounts[from_accno].transactions.debitTransactions.push(transactions_debited_object)
    
    
    
                        let credited_account_balance = this.accounts[to_accno].balance += amount
                        let transactions_credited_object = {from_accno, amount}
                        this.accounts[to_accno].transactions.creditTransactions.push(transactions_credited_object)
    
                        console.log(`${amount} is successfully transferred to ${to_accno}. Availble balance in ${from_accno} is ${debited_account_balance}`)
    
                    }
                    else {
                        console.log(`Not enough balance!`)
                    }
                }
    
                else {
                    console.log(`Invalid to account number!`)
                }
            }

            else {
                console.log(`Can't transfer to same account. Enter another to account number.`)
                
            }

        }

        else {
            console.log(`No log in session. Login with an account.`)
        }

    } /* here we don't use from_accno parameter. Instead once we authenticate a from accno it'll be flagged inside session object. so we use that object to search for from account authentication*/

    // method to get debited transactions from logged in session
    getDebitTransactions() {

        if ("user" in this.sessions) {
            console.log(`the logged in user is:`)
            console.log(this.sessions["user"])
            console.log(`debited transactions details of this account:`)
            console.log(this.accounts[this.sessions["user"]].transactions.debitTransactions)
        }
        else {
            console.log(`no logged in user! log in with an account number`)
        }
        
    }

    // method to get credited transactions of the logged in user
    
    getCreditTransactions() {
        
        if ("user" in this.sessions) {
            console.log(`the logged in user is:`)
            console.log(this.sessions["user"])
            console.log(`credited transactions details of this account:`)
            console.log(this.accounts[this.sessions["user"]].transactions.creditTransactions)
        }
        else {
            console.log(`no logged in user! log in with an account number`)
        }
    }
    // to get whole transaction details of the logged in account
    getTransactionHistory() {

        if ("user" in this.sessions) {
            console.log(`the logged in account is:`)
            console.log(this.sessions["user"])
            console.log('transaction history:')
            console.log(this.accounts[this.sessions["user"]].transactions)
        }
        else {
            console.log(`no logged in account! log in with an account.`)
        }

    }
}

// creating an object named bank from class Bank and the reference name is bank

var bank_reference = new Bank()

// checking validation method working

console.log(`* checking working of validate method with accno 1000`)
console.log(bank_reference.validate(1000))
console.log("")

console.log(`* checking working of authentication method using accno 1000 and password "userone"`)
bank_reference.authentication(1000, "userone")
bank_reference.authentication(1001, "usertwo")
console.log("")

console.log(`*checking value inside sessions object inside class Bank`)
console.log(bank_reference.sessions)
console.log("")

console.log(`* checking getBalance method using accno 1000 and 10000`)
console.log(bank_reference.getBalance(1000))
console.log(bank_reference.getBalance(10001))
console.log("")

console.log(`* checking balance of current logged in session using and displaying current logged in account via balanceEnquiry method `)
console.log(bank_reference.balanceEnquiry())
console.log("")

console.log(`* checking fund transfer between accounts`)
console.log("logged in user is:")
console.log(bank_reference.sessions)
console.log("")
bank_reference.transfer(1001, 100)
console.log("")
bank_reference.transfer(1000, 1111111)
console.log("")
bank_reference.transfer(1000, 100)
console.log("")

console.log(`checking transaction object of 1000 and 1001 after transfer`)
console.log(bank_reference.accounts[1000].transactions)
console.log(bank_reference.accounts[1001].transactions)
console.log("")

console.log(`* checking debited transactions details of logged in user:`)
bank_reference.getDebitTransactions()
console.log("")


console.log(`* checking credited transactions details of logged in user:`)
bank_reference.getCreditTransactions()
console.log("")

console.log(`* checking transaction history of the logged in user:`)
bank_reference.getTransactionHistory()