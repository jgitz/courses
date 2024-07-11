/*  

- <string>.indexOf(<letter or word>)

    ** returns the index of letter or STARTING INDEX of word 

    ** returns -1 if the letter/word is not found 

- <string>.lastIndexOf(<string with repeating words>): gives out the index of the LAST REPEATING WORD

- <string>.length: gives the length of the string 

- <string>.trim(): remove white space from start and end of string

    ** DOESN'T MUTATE

- <string>.split(<divider element>) : splits the letters/words of a string according at the divider element and MAKES AN ARRAY out of it 

    eg... to split the elements of a word by space and make an array out of it use 

      <string>.split(' ')

- <string>.charAt(<index_value>): to see which letter is at index value

- <string>[<index_value>]: also returns letter at index value as string is treated as array

- <string>.slice(<starting_index>, <ending_index>): to return the value from starting to ending index

    ** NO MUTATION

    ** includes the starting element 

    ***** DOESN'T INCLUDE the ENDING ELEMENT

- <string>.substr(<n1>, <n2>): to get values to right of an element of a string

    ** n1 : starting index 

    ** n2: number of elements to right of starting index

    ***** deprecated

    
- <string>.replace('<old>','<new>'): replaces old character from string with new

    ** DOESN'T MUTATE

- <string>.search(regular_expression): to search the value according to the regex  

    
 
*/

// testing index of method


console.log("Jerald Joseph".indexOf('Joseph')) // o/p: 7: because starting letter of Joseph is at index 7

console.log("Jerald Joseph".indexOf('hu')) // o/p: -1

// texting lastIndexOf method

console.log('888'.lastIndexOf("8")) // o/p: 2

// testing length property 

console.log('Jerald'.length) // o/p: 6

// testing trim property 

let word_with_white_Space = " Jerald     "

console.log(word_with_white_Space.trim()) // o/p: "Jerald" ; ** no white space at start and end

console.log(word_with_white_Space.length) // o/p **** DON'T MUTATE the original text variable

// testing split property 

let text = "Jerald Joseph"

let split_array = text.split(" ")
console.log(text) // o/p:  Jerald Joseph
console.log(split_array) /* o/p

[ 'Jerald', 'Joseph' ]

 */

// testing charAt 

console.log("Jerald".charAt(1)) // o/p: "e"

// testing slice 

let text2 = "Jerald"

console.log(text2.slice(1, 4)) // o/p : "era" ; **** DOESN'T INCLUDE the ENDING ELEMENT
console.log(text2) // o/p: Jerald; ** NO MUTATION

// testing substr

let text3 = "teddy tom"

console.log(text3.replace("tom", 'jerry')) // o/p teddy jerry
console.log(text3) // o/p: "teddy tom"; ** DON'T MUTATE




