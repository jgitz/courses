// given an array of objects which holds account details of a bank.

var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
    acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

  // q1) print total number of accounts
  console.log("****q1 total number of accounts in account array****")

  console.log(accounts.length)

  // q2) print account numbers of savings account holders
  console.log("****q2 account numbers of savings account holders****")
  accounts.filter( e => e.ac_type == "savings").forEach( n => console.log(n.acno)) 

  // q3) print balance of acno = 1000

  console.log("****q3 the balance of account number 1000 is****")
  accounts.filter( n => n.acno == 1000 ).forEach( e => console.log(e.balance)) // after find method, map or forEach won't work. so we used filter

  // or better method using find

  console.log("q3 balance of acc no 1000 using find")
  var balance_1000 = accounts.find( e => e.acno == 1000).balance
  console.log(balance_1000)

  // q4) print all g-pay trancations of all accounts
  console.log("q4 ****all transactions done via google pay(g-pay)****")
  var f = accounts.map( e => e.transactions) // f is an array of arrays
  var flat_f = f.flat()
//   console.log(flat_f)

  flat_f.filter( e => e.method == "g-pay").forEach( n => console.log(n))

  // in single line
  
  console.log("g-pay transactions in single line of code")
  
  accounts.map( e => e.transactions ).flat().filter( n => n.method == "g-pay").forEach( e => console.log(e))

  //  q5) print all transactions that have come into account number 1002
  console.log("****q5 all transactions done towards account number 1002****")

  accounts.map( e => e.transactions ).flat().filter( n => n.to == 1002 ).forEach( e => console.log(e))

  // q6) account details of account with highest balance
  console.log("q6 ****account details of highest balance having account****")
  var highest_balance = accounts.sort( ( n1, n2 ) => n2.balance - n1.balance )/*.[0]*/[0]
  console.log(highest_balance) 

  // q7) print all debited and credited transactions from account number 1002

  console.log("q7**** all transaction credited and debited to account number 1002****")
//   var all_transaction_map_flat = accounts.map( e => e.transactions).flat()
//   console.log("transactions came to account no 1002: ")
//   all_transaction_map_flat.filter( e => e.to == 1002).forEach( n => console.log(n))
//   console.log("transactions done from account no 1002: ")
//   accounts.filter( e => e.acno == 1002 ).map( n => n.transactions).flat().forEach( e => console.log(e))

  var debited_from_1002 = accounts.find( e => e.acno == 1002).transactions
  var credited_to_1002 = accounts.map( e => e.transactions).flat().filter( n => n.to == 1002)
  var transaction_history = { "debited from 1002": debited_from_1002, "credited to 1002": credited_to_1002}
  
  console.log(transaction_history)
  
// jerald is trying to map account number to transactions ( can only be proceeded after next sessions about arrays inside objects1)
//   var map_acno_to_transactions = {}
//   var map_operation = accounts.map( e => e.acno ? a[e.acno] = e.transactions : console.log("accounts not present") )
//   console.log(map_acno_to_transactions)

// if ()






  
