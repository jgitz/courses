/* 

.... there are methods to add elements at the start and end of the string ....

    - PAD START METHOD: to add characters at the start of a string 

        - syntax: 

            <>.padStart(<length in numeral>, "<character>")

              ** length: is the total length of the output INCLUDING the padding characters and the STRING characters 

    - PAD END METHOD: to add characters at the END of a string

        ** syntax same as pad start


*/
const string_variable = "1234"


console.log(string_variable.padStart( 5, "*")) // *1234

console.log(string_variable.padEnd(5, "*")) // 1234*

console.log(string_variable.padStart(9, "*").padEnd(14, "*")) // *****1234*****