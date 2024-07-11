/* 
primitive data types are: string, number, boolean, symbol, null, undefined

non-primitive data types are: arrays, functions, objects = objects

*/

/* 
when primitive data types are assigned to a variable, any changes to the value don't change the original value

for eg : in below example, we assign a number data type
    - and assign another variable to it
    - then change the value of latest added variable
    - result is this don't change the value of original variable
*/

let num = 1

let num_2 = num

num_2 = 3

console.log(num) // 1 ****  no change
console.log(num_2) // 3 **** only num_2 value changed... no change in value of num

/* 
but when we assign a variable with a non-primitive datatype
 -then another variable is assigned to the first variable
 - changed the object value of the 2nd variable
 - when printed... the value of first object variable gets the value of 2nd object variable
*/

let object = {
    num: 1
}

let object_2 = object;

object_2.num = 3

console.log(object) // { num: 3 }***** original value of first object is changed
console.log(object_2) // { num: 3 }