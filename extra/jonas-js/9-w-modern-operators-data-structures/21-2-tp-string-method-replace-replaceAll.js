/* 

- <>.replace() : is used to replace the FIRST OCCURANCE of a character/word of a string 

    - syntax:

        <>.replace("<target word>", "<replacement word>")

- <>.replaceAll(): is used to replace ALL OCCURANCE of a character/word of a string

    - syntax:

        <>.replaceAll("<target word>", "<replacement word>")

- REPLACING ALL WORDS USING REGEX 

      <>.replace(/<target word>/g, "<replacement word>")

        **** DON'T wrap the REGEX STRING ARGUMENT in "".... else error

*/

// <>.replace()

console.log("abc abc".replace("abc", "123")) // "123 abc"

// <>.replaceAll()

console.log("abc abc".replaceAll("abc", "123")) // "123 123"

// replacing all occurance using regex

console.log("abc abc".replace(/abc/g, "123")) // "123 123" 
/* 
  **** DON'T wrap the REGEX STRING ARGUMENT in "".... else error
*/
