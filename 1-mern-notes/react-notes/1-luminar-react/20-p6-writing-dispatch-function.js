/* 
.... we can write many action files to do various operations in a project......

..... here we intend to DISPATCH a FUNCTION to FETCH data from RESTAURANTS.JSON and send SUCCESS and FAIL status ..... then SEND it out as PAYLOAD from ACTION file....

.... the DISPATCH is a function with an object with 2 properties inside
                1) type: is a marker for switch statement in REDUCER FILE
                2) payload: output data which will be sent out from ACTION file to REDUCER file



*/

/* 

.... make sure AXIOS is installed.....

.... make sure THUNK is installed.....

goto restaurantAction.js.... to execute a despatch we make an EXPORT FUNCTION inside FUNCTION.... with a function variable name list_restaurant_double_function_from_action_file....

.... the first function is an EMPTY arrow function.... then 2nd function is an ASYNC ARROW function with a PARAMETER named DISPATCH....

.... inside the 2nd ARROW function....make a TRY BLOCK... inside TRY.... make an AWAIT GET VARIABLE CALL to RESTAURANTS.JSON to fetch restaurant details and store it in the variable using AXIOS....

..... then inside TRY.... write DESPATCH FUNCTION with an OBJECT as argument....... OBJECT should have 2 propertied.... 1) type: which specifies SUCCESS variable from CONSTATS file and 2) payload: which specifies DATA variable to be send out of actions file....

.... now after TRY.... write CATCH block with ERROR parameter.... inside CAATCH BLOCK.... make dispatch function with an object as parameter.... the object has 2 properties..... 1) type: which specifies FAIL variable from constants.... and 2) payload: which specifies ERROR (parameter of catch)
*/