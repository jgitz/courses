 /* ++++++++ SET ITEM FUNCTION++++++++++++++
 
 
 inside DATABASE SERVICE TS write function to store BANK DATABASE and  DATABASE SERVICE LOGGEDIN USER ....
 ..... i.e if database is present, use setItem and JSON.parse to store it in ls
 .... if DATABASE SERVICE LOGGED IN USER is present, use setitem and json.parse to store it in local storage.... 
 
 .....in database TS.... CALL this FUNCTION in REGISTER(), LOGIN(), DEPOSIT() AND WITHDRAW()
 
 */



 /* ++++++ WARNING+++++++

  ***** but still after this, if we REFRESH THE PAGE, even though there is data IN LS, the welcome <LOGGED IN USER> gets DISAPPEARED....its because, WE STILL USE BANK_DATABASE in DATABASE TS file to RETRIEVE DATA

  ***** to tackle this, we need to GET data from LS DATABASE_KEY instead of BANK_DATABASE... so we need to write a GET FUNCTION FOR LS
 */

  /* ++++++ LS GET ITEM FUNCTION

  .... main use of this function is to GET VALUES from LS and STORE IT inside BANK_DATABASE and LOGGEDIN USER variables of DATABASE TS FILE

  write get funciton..... first if database_key is present in LS, add it into bank_database
  ......if loggedin_user_key present in LS, add it into database_loggedin_username....


  **** now CALL this GET FUNCTION from BODY of CONSTRUCTOR ( i.e inside CURLY {}) of DATABASE TS file.... because WE need LS DATABASE to replace VALUES inside BANK_DATABASE... and this DATABASE must be MADE before all lines of CODES are EXECUTED
  */



