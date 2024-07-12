// note: never use console log inside a function.
//.. instead return a value if the function workd
//.. so that we can reuse the same function with other things

// q) write a function to display the balance inside an account.

var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone"},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo"},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree"},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour"},

}

// function to validate acc no

function validate_acc_no(account_number) {
    // return account_number in users? true : false

    if (account_number in users) {
        return 1
    }
    else {
        return 0
    }

}

// function to view balance

function balance(account_no) {
    if (validate_acc_no == 1) /* (validate_acc_no(account_no)) */ {
        return users[account_no].balance;
    }
    else {
        return 0
    }
}

console.log(`* checking balance of acc no 1000`)
console.log("")
// balance(1000)// even to get return value of a function you have to console log
console.log(balance(1000))

console.log(validate_acc_no(1000))