/* 

..... every data which comes from frontend will be of type string.... so numbers are also send in the form of strings.... so we need to convert string numbers into number before using it for calculations.... there are 2 methods used to convert a STRING NUMBER to NUMBER 

*/

// METHOD 1: use Number function

  console.log(Number("23")) // 23 ** string is converted to number 

// MEDHOD 2: adding + infront of the string number will convert it to number 

  console.log(+"23") // 23

// METHOD 3: using Number.parseInt("<>") to separate an INTEGER from a string with a MIX OF NUMBERS AND ALPHABET

  console.log(Number.parseInt("30px")) // 30

  // **** the string should start with a number for this to work.....
  // **** if floating number is used.... it'll only return the value LEFT of the decimal

// METHOD 4: using Number.parseFloat("<>") to separate FLOATING POINT number from a string with a mix of FLOATING NUMBERS AND ALPHABETS

  console.log(Number.parseFloat("30.33px")) // 30.33

  // **** the string should start with a floating number for this to work.....
  