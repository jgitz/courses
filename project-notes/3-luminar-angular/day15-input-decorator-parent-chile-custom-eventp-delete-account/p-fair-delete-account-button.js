/* 
.... inside DASHBOARD HTML.... create a BUTTON for DELETE ACCOUNT

*/

/* 
.... generate a new component for viewing DELETE ACCOUNT CONFIRMATION BOX using... ng g c deleteAccount

..... in DELETE ACCOUNT component html.... design a CONFIRMATION box with confirmation question and a DELETE and CANCEL buttons

*/

/* 

.... we want to display the DELETE ACCOUNT HTML inside the DASHBOARD COMPONENT....
....so from DELETE ACCOUNT TS filel... copy the SELECTOR... goto DASHBOARD HTML.... paste the selector as tag... eg <app-delete-account></app-delete-account>>

..... 


*/

/* ++++ delete account function in dashboard ts

.... inside the dashboard ts declare a variable dashboard_delete_account_button_click: any to flag the when the button is click

.... inside dashboard ts create a function delete_account_function().....

..... inside the dashboard HTML... event bind (click) = "delete_account_function()" to the delete account button

..... inside dashboard ts .... inside delete_account function... write code such that when the button is clicked, the variable dashboard_delete_account_button_click_flag is assigned a STRING VALUE "clicked"

*/

/* 
....child html i.e delete account html always gets displayed inside dashboard.... we need to appear it only when the delete button is clicked....

....DASHBOARD HTML... inside child selector tag... define a property bind [click_flag] = "dashboard_delete_button_click_flag".... eg ...<app-delete-account  [dashboard_click_property] = "dashboard_delete_button_click_flag"></app-delete-account>....


****now TO SENT A PROPERTY defined inside PARENT HTML TAG to CHILD TS file, we use INPUT DECORATOR.... i.e inside CHILD TS we write syntax : @input() <PARENT HTML PROPERTY NAME> : string | undefined .... now the parent property and its value is stored in CHILD TS file.... and the property can be CALLED inside CHILD HTML TAGS....


..... goto DELETE TS file.... type INPUT DECORATOR .... @input() dashboard_click_property: string|undefined .... now we can dashboard click property and value is stored inside the delete ts file and can be CALLED inside DELETE HTML file

***** both delete and dashboard html is connected as delete component selector tag is pasted inside dashboard html

..... goto DELETE HTML.... on MAIN DIV TAG write STRUCTURAL directive *ngIf = "DASHBOARD_CLICK_PROPERTY === "clicked" "...... now only when the delete button is clicked, the confirmation gets displayed on dashboard html



*/


/* +++++ CONFIGURING NO BUTTON OF CONFIRMATION

..... when we click delete account button non dashboard... confirmation box appears... if we click CANCEL button... we have to return to DASHBOARD.....


.... to sense CLICK CANCEL button.... we have to make a CUSTOM CANCEL CLICK EVENT inside DELETE TS.... make a custom EVENT.... 
... SYNTAX: <EVENT_VARIABLE_NAME> = new EventEmitter (****** select ANGULAR CORE OPTION).... so here to make CUSTOM CANCEL EVENT.... inside DELETE TS... write.... cancel_event = new EventEmitter.... now cancel_event is created...


.... since we want to send this custom CANCEL_EVENT to DASHBOARD make it as an OUTPUT DECORATOR by editing the code.... @output() cancel_event = new EventEmitter

.... now this event should occur when CANCEL is CLICKED.... so in DELETE TS CANCEL button TAG, EVENT BIND  (click) = "trigger_cancel_event()"

..... in delete ts....we need to define trigger_cancel_event() such that we need to TRIGGER/ACTIVATE our CUSTOM cancel_event....
so indide TRIGGER_CANCEL_EVENT_FUNCTION we write.... this.cancel_event.emit()


..... now our DELETE TS OUTPUTS CANCEL_EVENT... so it can be EVENT BINDED inside DASHBOARD delete component selector tag.. i.e 
inside delete component selector.... (click_event) = "dashboard_cancel_event_function()"

..... inside DASHBOARD HTML....define DASHBOARD_CANCEL_EVENT_FUNCTION()such that.. it makes dashboard_delete_account_click_flag EMPTY and it navigates to dashboard page





*/