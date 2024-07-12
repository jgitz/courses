/*
set login page as model driven by removing [(ngmodel)] attributes from html tags and adding formGroup and formControl names to html page 
give validations to LOGIN ts file and html page.... add if condition for validation in ts file

*/

/* 
.... configure dashboard page html and ts file using MODEL driven approach

.... give separate group variables for both deposit and withdraw forms

..... write codes for depositing and withdrawing money from account in both TS FILE AND DATABASE SERVICE TS

.....***** use METHOD parseInt(<amount variable name>) to convert AMOUNT from STRING to NUMBER to do NUMBER OPERATIONS 


*/

/* 
..... give validations to both deposit and withdraw form input fields


*/


/* 
****** add a string interpolation VARIABLE to display WELCONME <loggedin username>

to configure this
....in DATABASE TS file.... declare new variable DATABASE_SERVICE_LOGGEDIN_USERNAME.... assign value by setting a trigger inside IF CONDITION of LOGIN FUNCTION OF DATABASE TS FILE...

....in DASHBOARD TS FILE....declare new variable DASHBOARD_LOGGEDIN_USERNAME (this is called in <h2> of DASHBOARD HTML using
    {{DASHBOARD_LOGGEDIN_USERNAME}} i.e STRING INTERPOLATION)....
    .....****** assign value  of DASHBOARD_LOGGEDIN_USERNAME inside CONSTRUCTOR BODY i.e inside constructor curly brackets like this.....
    constructor(){
        DASHBOARD_LOGGEDIN_USERNAME = THIS.DATABASE_SERVICE_CONSTRUCTOR.DATABASE_SERVICE_LOGGEDIN_USERNAME
    }

    ***** WE DECLARE IT INSIDE CONSTRUCTOR CURLY {} because we need to LOAD <h2> welcome tag IN THE BEGINNING ITSELF
*/