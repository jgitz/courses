/*  create a new component named registerModelDriven component inside FAIR BANK PROJECT to PRACTICEE MODEL DRIVEN APPROACH

*/

/* 
set html page to new component

*/

/* 
set path of new component in app.routing.ts inside ROUTES[]
*/

/* 
in app.modules.ts add ReactiveFormsModule inside IMPORTS[]
*/

/* 
in component ts file
.... set DEPENDENCY INJECTION of FormBuilder inside CONSTRUCTOR(private form_builder_constructor: FormBuilder){} 

.... define register_model_group_variable = this.formbuilder_constructor.group({
    unname_array_variable: [""]
    accno_array_variable: [""]
    password_array_variable:[""]
})

*/

/* 
inside HTML

....inside form tag... set [formGroup] = "register_model_group_variable"

..... inside each input tags of uname, accno and password add control attribute.... formControlName = "uname/accno/password_array_variable"

*/

 /* 
 ... write or copy and paste codes for register_function() from previous register component

 ..... replace the variables where values is called with ... REGISTER_MODEL_GROUP_VARIABLE.VALUE.uname/accno/password_ARRAY_VARIABLE
 
 
 */

 /* 
 
 in LOGIN HTML PAGE, change the ROUTER LINK attribute of the REGISTER ANCHOR LINK to path name of new register page i.e registerModelDriven
 
 */