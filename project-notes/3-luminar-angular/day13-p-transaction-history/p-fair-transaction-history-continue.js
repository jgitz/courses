/* design transaction history html page with a table and a LINK to go back to DASHBOARD

.... table must have a w column with headings TYPE (CREDIT/DEBIT) and AMOUNT

*/

/* 
... create a transaction array[] inside the bank_database inside DATABASE service filt

.... in register model driven ts, inside register function if condition, add transaction: []

....inside database service.... comment out get function from constructor.... now login one more time with any account to get transaction[] loaded.... now uncomment the get function from constructor....

*/


/* 

.... in database service ts... declare a variable named DATABASE SERVICE TRANSACTION FUNCTION  to store transaction details...
......in database service ts.... declare a variable named DATABASE SERVICE LOGGEDIN ACCNO to store LOGGED IN accno

..... in database service ts.... write codes for transaction array push inside deposit and withdraw function...
...... in login function add code to store logged in accno inside database_service_loggedin_accno
...... in login function add code to store logged account transaction inside database_service_loggedin_transaction

...... in ls_set function... add codes to add database_service_loggedin_accno and database_service_loggedin_transaction inside LS....

..... inside the ls_get_function.... add codes to point the add database_service_loggedin_accno and database_service_loggedin_transaction variables to KEYS stored inside LS 

*/

/* +++++++TRANSACTION HISTORY COMPONENT CODES

...in transaction history TS FILE... initialize variables loggedin_accno and loggedin_transaction to store loggedin accno and its transaction array

.... in transaction history ts .... inside CONSTRUCTOR body (inside curly {}) ..... write code to assign values to loggedin_accno and loggedin_transaction from DATASBASE_SERVICE VARIABLES




*/

