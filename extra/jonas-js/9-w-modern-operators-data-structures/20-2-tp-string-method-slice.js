/* 

- SLICE STRING METHOD : to EXTRACT a portion of the string from a starting index to ending index

    - syntax 

        <>.splice(<start index>, <end index>)

            ** start index character WILL BE INCLUDED 

            ** ending index character WON'T be included

            ** also takes arguments as NEGATIVE VALUES 

                eg: -1 means last character 

                eg: -2 means second last character

    ** string methods DON'T MUTATE the original string as STRING is a PRIMITIVE DATA STRUCTURE



*/

let string_variable = '0123 56 89'

console.log(string_variable.slice(1, 6)) // 123 5 ** includes the starting index.... EXCLUDES the ending index

console.log(string_variable.slice(0, -1)) // 56 8

// dynamically print characters from starting element till ending element of a string 

console.log(string_variable.slice(0)) // 0123 56 89 ** if ending index is not specified.... it'll print till end of the string 

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

// dynamically print first word of a string 

console.log(string_variable.slice(0, string_variable.indexOf(" "))) // 0123

// dynamically print last word of a string 

console.log(string_variable.slice(string_variable.lastIndexOf(" ") + 1)) // 89 ** + 1 because.... else it'll include the SPACE character as splice method extracts the starting index element


