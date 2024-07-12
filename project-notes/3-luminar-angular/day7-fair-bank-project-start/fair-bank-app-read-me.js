// designing the bank app from start in new folder named FAIR-BANK-APP-PROJECT....

// create login component
// create register component
// create dashboard component
// add assets image in app/asset....add bootstrap links only in src/index.html..... add login body html only in app/app.component.html.... add css in src/style.css....


// to enable 2 way binding configure src/app/app.module.ts by adding formsModule inside imports[]

// to enable routing, configure file.. src/app/app.routing.module.... add paths and component objects for each pages i.e login, register and dashboard inside routes[]....
//.... in app.component.html, set the tag <router-outlet></router-outlet>

// set login, register and dashboard components html codes in their respective component html pages
// set 2 way binding in all component html pages at relevent input fields by adding attribute [(ngModel)] = "ts_file_variable"
// set ts files of register and login files with binding variables

// configure routerlink = "register" inside login.html

// DEPENDENCY INJECTION: add router class in relevent components (login, register, dashboard ) ts files via constructor(private <router_constructor>: Router){} to enable navigation to urls when we type command.... this.router_name.navigateByUrl("path_name")....


/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& DAY 6 and 7 tasks starts here &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

... create new folder named SERVICES inside src/app/.... OPEN INTEGRATED TERMINAL from SRC/APP/SERVICES FOLDER..
...type..ng g s database... to generate a service to hold DATABASE DATASET...
.... open src/app/services/databasService.ts... create a nested object dummy database with fields accno, username, password and balance....
...DEPENDENCY INJECTION: link database.service.ts to all components ts file by making constructor(private database_constructor: DatabaseService){} **** private is importent
*/


/* &&&&& configuring LOGIN FUNCTION in DATABASE.service and LOGIN.component&&&&&&&&&

....open database.service... create a database_service_login_function() to check if accno and password is correct... then return TRUE... else RETURN false

....open login.component.ts.... inside login_function CALL DATABASE_SERVICE_FUNCTION and if it is TRUE, alert "login success".. else alert "login failed"

*/



/* &&&&&&&&&&&& configuring REGISTER FUNCTION in DATABASE.service and REGISTER.component &&&&&&&&&&&

.... create a register function inside DATABASE.service to check if accno exists, else create a new account in database with name, accno, password and balance.... 

.... in REGISTER component create a register function to call the function from DATABASE.service

*/