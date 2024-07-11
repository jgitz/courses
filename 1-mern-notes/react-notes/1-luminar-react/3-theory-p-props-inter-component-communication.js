/* ++++++ PROPS++++++++++++++++
to send a data or variable or STATE VALUE from parent to child.... we use PROPS as PARAMETER inside CHILD COMPONENT

*/

/* +++++ PROPS PRACTICE+++++++++++

.... to send 2 datas named DATA_ONE and DATA_TWO from custom made APP.JS to HOME COMPONENT.... do the following....

....inside app.js.... create 2 STATES named data_one and data_two using useState()... with string values.....

.... now inside app.js.... inside the <home /> tag.... to send these state variables.... assign these two variables inside another variable BEFORE / like this..
                            < home <props_item_one_from_app> = {data_one} 
                                   <props_item_two_from_app> = {data_two}/>

.... now to get these displayed in browser... goto HOME.JS i.e CHILD.... inside home() add parameter named PROPS....
.... inside return().... call the data using code.... {props.item_one_from_app}





*/