"use strict";
/*

- INTERFACE OBJECT ANNOTATION: also used to define OBJECT BLUEPRINT

    ** uses INTERFACE KEYWORD

    ** OPTIONAL PROPERTIES CAN BE SET USING ?

    **** INTERFACE is NOT EQUAL to TYPE.... interface only refers to a BLUEPRINT STRUCTURE for OBJECTS assigned with an INTERFACE

- convention

    - the interface name should START WITH UPPERCASE (.. just like type object annotation)


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.teddy = void 0;
exports.teddy = {
    name: 'Emmanuel',
    age: 24,
};
console.log(typeof (exports.teddy)); // object
console.log(exports.teddy);
// ***** INTERFACE is NOT A TYPE... it's just a BLUEPRINT OBJECT to make another objects 

// **** there is NO = used after INTERFACE NAME while defining an interface

// ***** INTERFACE keyword CANNOT be used to create TYPE ALIASES (..later in 4th folder).... BUT, TYPE OBJECT NOTATION CAN be used to create TYPE ALIASES 

// **** HERE I USED an EXPORT statement on variable name TEDDY INORDER TO AVOID.... NAME CONFLICTS... as Person and teddy variable names are used in previous files of the same folder.... TYPESCRIPT DON'T allow files of a folder to take same variable names in multiple files.... to OVERRIDE this we can use an EXPORT/IMPORT statement inside the file....
