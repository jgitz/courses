/* 

..... there is also a GLOBAL METHOD to ROUND UP?? and set the number of places to the RIGHT SIDE OF THE decimal point..... this method is known as .toFixed(<>) method

- TO FIXED method SYNTAX 

     <decimal number>.toFixed(<n>)

        - n : number of places right to the decimal

        ** toFixed ALWAYS RETURNS a STRING 

        ** toFixed always ROUNDS UP the decimal place

        ** toFixed method is NOT PART OF MATH OBJECT

***** since to fixed always return a string.... you need to CONVERT it to NUMBER DATATYPE by either addin + infront of the string or by using Number(<>) method


***** ROUNDING UP?? ONLY HAPPENS INSIDE BROWSER and NOT IN NODEJS 

*/

let decimal_number = 1.12345.toFixed(3) // 1.123

console.log(decimal_number) // 1.123 ** type is string 

console.log(typeof(decimal_number)) // string

// to convert the decimal_number to a NUMBER DATATYPE 

decimal_number = +decimal_number
console.log(typeof(decimal_number)) // number

// more examples of toFixed 

console.log(+1.12.toFixed(5)) // 1.12000