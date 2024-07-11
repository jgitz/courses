/* 

- INDEXOF method: is used to get the index number of the character fed into the method

    - syntax 

        <>.indexOf(<character>)

- LAST INDEX OF method: is used to get the index number of the LAST REPEATING CHARACTER which is fed into the method

    - syntax 

        <>.lastIndexof(<character>)

** if word is given instead of character as argument.... it returns the index of the starting character of the word 

** if the searching character is not present.... it returns -1

*/

// indexOf method practice

let string_variable = "hi everybody hi"

console.log(string_variable.indexOf("i")) // 1 

console.log(string_variable.indexOf("every")) // 3 ** returns the starting index of the WORD fed into it 

console.log(string_variable.indexOf("x")) // -1 ** returns -1 if there the character is not present

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

// lastIndex of Practice 

console.log(string_variable.lastIndexOf("i")) // 14

console.log(string_variable.lastIndexOf("hi")) // 13

console.log(string_variable.lastIndexOf("x")) // -1

