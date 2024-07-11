/* 

- INTERFACE OBJECT ANNOTATION: also used to define OBJECT BLUEPRINT

    ** uses INTERFACE KEYWORD

    ** OPTIONAL PROPERTIES CAN BE SET USING ?

    **** INTERFACE is NOT EQUAL to TYPE.... interface only refers to a BLUEPRINT STRUCTURE for OBJECTS assigned with an INTERFACE 

- convention 

    - the interface name should START WITH UPPERCASE (.. just like type object annotation)


*/

interface Person {
  name:string,
  age:number, 
  marital_status?:boolean
} // **** NO = SIGN AFTER <interface name>

export let teddy:Person = {
  name: 'Emmanuel',
  age: 24,
}

console.log(typeof(teddy)); // object
console.log(teddy); /* 

  { name: 'Emmanuel', age: 24 }

  **** UNLIKE TYPE OBJECT ANNOTATION.... the OPTIONAL PROPERTY IS NOT shown in OUTPUT (** in TYPE OBJECT ANNOTATION... the optional property is SHOWN and the value is set to FALSE if the optional property is NOT used when creating the object )

*/

// ***** INTERFACE is NOT A TYPE... it's just a BLUEPRINT OBJECT to make another objects 

// **** there is NO = used after INTERFACE NAME while defining an interface

//**** UNLIKE TYPE OBJECT ANNOTATION.... the OPTIONAL PROPERTY IS NOT shown in OUTPUT (** in TYPE OBJECT ANNOTATION... the optional property is SHOWN and the value is set to FALSE if the optional property is NOT used when creating the object )


// **** HERE I USED an EXPORT statement on variable name TEDDY INORDER TO AVOID.... NAME CONFLICTS... as Person and teddy variable names are used in previous files of the same folder.... TYPESCRIPT DON'T allow files of a folder to take same variable names in multiple files.... to OVERRIDE this we can use an EXPORT/IMPORT statement inside the file....

