/* &&&& SERVICE FOLDER

.... somme of the data sets like database would be needed to be pasetd in many component ts files.... pasting same data is repetation of codes.... so frequently needed data is stored in service folder and we can call it from there when needed,,,,

BUT...FOLDER for SERVICE is NOT created by angular by default....

...create NEW SERVICE FOLDER....BANK_APP/SRC/APP/SERVICES

....now to create an new service ts file inside BANK_APP/SRCAPP/SERVICES, open TERMINAL from SERVICES FOLDER and type.... ng g s <service_name>

eg: you need database dataset frequently, so need to make a service for database....
    ....step1: make SRC/APP/SERVICES FOLDER...
    ....step2: open TERMINAL from SERVICES FOLDER....
    ....step3: create a new service for database via cli command.... ng g s database

****to CALL contents of DATABASE.TS into any COMPONENT, you must link it to the component by creating A CONSTRUCTOR like this inside the component.... constructor(private <database_object>: <DatabaseService(**** obtained from database.ts from src/services/database.ts  )>) {}
*/