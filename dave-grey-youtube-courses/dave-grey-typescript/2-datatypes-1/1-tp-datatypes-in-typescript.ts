/* 

- BASIC DATATYPES IN TYPESCRIPT:

    - <>:number
    - <>:string
    - <>:boolean 
    - <>:any >> can take any datatype 

        ** mostly we use it when we get data from API

    - VOID TYPE: used on FUNCTION which RETURN NOTHING
        
    - <>:RegExp >> to store regular expressions

    - UNION: we can assign multiple datatype to a variable like this 

      <>:<datatype 1>|<datatype 2>| <datatype 3>

    - ARRAY: next lesson folder

    - TUPLE: next lesson folder >> TUPLE is ARRAY with FIXED LENGTH and ORDER of TYPE of ITEMS of the ARRAY

    - OBJECT: next lesson folder

    - CUSTOM OBJECT type: next lesson folder

    - ENUM datatype: next lesson folder >> ENUM STANDS for ENUMERATION.... it allows us to use NAMED CONSTANTS and associate it with NUMBER VALUES 



*/

let full_name:string;

let id:number;

let marital_status: boolean;

let word_filter_regEx: RegExp; 

let age: string|number; 

let api_response: any; 

// ** assigning types to function params
function sum(num1: string, num2: number) {

  console.log(typeof(num1 + num2))

  console.log(num1 + num2)
}

sum('1', 2) /* 

  string 
  12

  >>>> **** the output is string as string + number is a string and typescript IMPLICITELY does that
*/

