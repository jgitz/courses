// given an nested object with properties account number and account details which includes a password key inside nested array for authentication

var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone"},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo"},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree"},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour"},

}

// q1) print account details of accno 1003
console.log("q1****account details of account number 1003****")
// console.log(users.1003) //not working
console.log(users[1003])

// q2) print name of account number 1003
console.log("q2****name of account number 1003****")
// console.log(users[1003][personName]) // personname in square brackets don't work
console.log(users[1003].personName)

// q3) create a function to authenticate an account number with password. 

console.log("q3****authentication function****")

function authentication(accountNumber, passwd) {

if ( accountNumber in users) {
    console.log(`checking the password....`)
    // let pass_check = users[accountNumber].password

    if ( passwd == users[accountNumber].password ) {
        console.log(`authentication success!!`)
        return "hurray"
    }

    else {
        console.log(`invalid password`)
    }
}

else {
    console.log(`the account number ${accountNumber} does not exists here`)
}

    
}

console.log('*checking function with arguments 1000, "userone"')
console.log("")
authentication( 1000, "userone") // careful with the quotes on password. Always check the input data type of argument
console.log("")

console.log('*checking function with arguments with non-existant 1111, "blah" ')
console.log("")
authentication( 1111, "blah")
console.log("")

console.log(`*checking function with arguments 1003, blah`)
console.log("")
authentication( 1003, "blah")
console.log("")

console.log("* just checking displaying of return value")
console.log(authentication(1003,"userfour")) // whenever you console log your created function, it returns the return value along with other values from that function. to see return value you have to console log the function with arguments

console.log("**")
console.log("")

// q4) create a function to send an amount of cash from one account number to another
console.log("q4****function for transferring an amount from one account to another****")
console.log("")
function transfer(amount, from_acc_no, to_acc_no) {

    if (from_acc_no in users) { // checking existance of from account number

        if ( to_acc_no in users) {

            if ( users[from_acc_no].balance < amount ) { /* checking if amount is available in balance */
                console.log("insufficient amount in sender's account")
            }

            else {

                console.log("please wait..transferring..")
                console.log("transfer success!!")
                users[from_acc_no].balance -= amount
                users[to_acc_no].balance += amount

                console.log(`amount ${amount} is added to ${to_acc_no} and the new balance is ${users[from_acc_no].balance}`)
                console.log(users)
            }
        }

        else {
            console.log("the receiver's account does not exists")
        }
    
    }

    else {
        console.log("the sender's account number does not exists")
    }

}

console.log(`* transferring 100 rupees from acc no 1000 to 1001`)
console.log("")
transfer(100, 1000, 1001)
console.log("")
console.log(`* transferring 123456 rupees from acc no 1000 to 1001`)
console.log("")
transfer(123456, 1000, 1001)
console.log("")
console.log(`* transferring 100 rupees from non-existant acc no 1111 to 1001`)
console.log("")
transfer(100, 1111, 1001)
console.log("")
console.log(`* transferring 100 rupees from 1000 to a non-existant acc no 1111`)
console.log("")
transfer(100, 1000, 1111)
console.log("")
console.log(`transferring 100 back from acc no 1001 to 1000`)
console.log("")
transfer(100, 1001, 1000)
//another way is to make a separate function to check existence of from and to account numbers.