/*  

- to convert a number in string format or BOOLEAN (true/false) to number datatype use

  Number('<string number or true or flase>')

- you can also use PARSEINT method to convert string number to a number datatype 

  parseInt('<string number>')

    ***** parseInt WON'T convert BOOLEAN true/false to number datatype... it'll give NaN

- to check if a variable VALUE is NOT A NUMBER... inside the CONDITION ALWAYS use

  Number.isNaN(<variable>)

- to FIX decimal places of a number with a big decimal place use 

    <decimal number element>.toFixed(<number of decimal placec you want after decimal>)



   

*/

// using Number() method

console.log(Number('123')) // o/p: 123 as number datatype
console.log(Number('qsd')) // o/p: NaN
console.log(Number(true)) // o/p: 1
console.log(Number(false)) // o/p: 0

// using parseInt() method

console.log(parseInt('123')) // o/p: 123 as number datatype 
console.log(parseInt('abc')) // o/p: NaN
console.log(parseInt(true)) // o/p: NaN

// using Number.isNaN() method

let not_a_number = Number('abc')
console.log(Number.isNaN(not_a_number)) // o/p: true

// using TO FIXED METHOD 

console.log(100.12345.toFixed(2)) // o/p: 100.12

