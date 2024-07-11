/* 

- create person object with properties 

    - name 
    - age
    -  MARITAL STATUS 

*/

const person: object = {
  name: 'Teddy', 
  age: 23, 
  marital_status: 0
}

console.log(typeof(person)) // ** object

// **** in : object we CANNOT ADD TYPES TO PROPERTIES
// **** in : object we CANNOT make PROPERTIES OPTIONAL USING ?

// ** assigning :object to array variable 

const arr:object = [1, 3, 5, 7] // ** NO ERROR as array is also object

console.log(typeof(arr)) // ** object >> NOT ARRAY  

// ** assigning :object to function expression 

const function_expression = ():object => {
  console.log('hello')
  return []
} /* 

  **** take note that the return type of the fuction is defined after () and NOT AFTER THE FUNCTION VARIABLE 

  ** here no error even if the function returns an array... because array is also object

*/
console.log(typeof(function_expression)) // ** FUNCTION >> and NOT OBJECT

/* ** eventhough function is an object in js.... functions are assigned separate type named FUNCTION... INORDER to DISTINGUISH functions as functions has UNIQUE BEHAVIORs distinct from other objects */

function_expression() /* hello */

