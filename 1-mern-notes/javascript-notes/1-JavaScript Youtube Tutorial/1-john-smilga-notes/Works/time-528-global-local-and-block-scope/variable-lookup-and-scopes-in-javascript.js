/* 
a javascript file has
    - parent functions
    - child functions
    - global scope

- whenever a js file is executed
    - it first looks up presence of a variable in CHILD function local scope, then if it's not there it looks up in PARENT function local scope, then if it's not there it looks for the variable in GLOBAL scope

    - THIS IS SAME FOR REGULAR BLOCK (i.e {}) as well as for BLOCKs ( if, switch, for, while)

- a variable of a PARENT function can be accessed by its child. But, a variable declared in CHILD funciton CANNOT be accessed by the PARENT function
*/