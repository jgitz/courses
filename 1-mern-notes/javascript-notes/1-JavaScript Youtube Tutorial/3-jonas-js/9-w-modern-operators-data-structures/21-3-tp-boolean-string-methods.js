/* 
  - boolean string methods: are string methods that return boolean

      1) <>.includes("<character/word>") : returns true if the character/word exists inside the string.... else false 

      2) <>.startsWith("<character/word>") : returns true if the string starts with character/word.... else false 

      3) <>.endsWith("<character/word>") : returns true if the string ends with character/word.... else false 


*/

const string_variable = "hi hello"

console.log(string_variable.includes("ello")) // true 

console.log(string_variable.includes("Ello")) // false

console.log(string_variable.startsWith("hi")) // true

console.log(string_variable.endsWith("llo")) // true