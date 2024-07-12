// q) In previous users variable nested object dataset, create a function to transfer fund from one account to another and create a new array property called transactions which will hold the fund transfer info



var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone", transactions: [ {credited_transactions: []}, 
    {debited_transactions: []} ]},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo", transactions: [ {credited_transactions: []}, 
    {debited_transactions: []}]},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree", transactions: [ {credited_transactions: []}, 
    {debited_transactions: []}]},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour", transactions: [ {credited_transactions: []}, 
    {debited_transactions: []}]}, // transactions empty array on each account was manually created by me.

}
// function to check if account number exists
function validate(account_no) {
    return account_no in users ? true : false;
}

// console.log(validate(1000)) checking

// function to check if balance is there to transfer the amount

function balance(account_no) {
    if (validate(account_no)){
        return users[account_no].balance
    }
    else { 
        console.log(`account number ${account_no} is invalid`)
            }
}

// console.log(balance(10001)) checking

// function to transfer fund from one account to another

function transfer(amount, from_accno, to_accno) {

    if (validate(from_accno) && validate(to_accno)) {
        
        if (balance(from_accno) > amount) {
            current_balance_of_from_account = users[from_accno].balance
            current_balance_of_from_account -= amount
            
            console.log(`${amount} has been debited from ${from_accno} and new balance is ${current_balance_of_from_account}`)

            transactions_credited_to_object = { to_accno, amount}

            current_balance_of_to_account = users[to_accno].balance

            current_balance_of_to_account += amount
            
            console.log(`${amount} has been credited to ${to_accno} and the new balance is ${current_balance_of_to_account}`)

            transactions_debited_from_object = { from_accno, amount}

            users[from_accno].transactions[0].credited_transactions.push(transactions_credited_to_object)
            users[to_accno].transactions[1].debited_transactions.push(transactions_debited_from_object)

            console.log("")
            
            console.log(`* displaying transactions details`)
            
            console.log("")
            console.log(users.)
        }
        else{
            return console.log("insufficient balance")
        }
    }
    
    else {
        console.log(`check the account number`)
    }
    
}


console.log(transfer(100, 1000, 1001))