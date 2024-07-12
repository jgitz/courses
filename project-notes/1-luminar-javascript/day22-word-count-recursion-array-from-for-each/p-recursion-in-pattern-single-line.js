// pattern is ABCCAA. print first recusive character using minimal line of code

var pattern = "ABCCAA"
console.log("****the pattern is****")
console.log(pattern)

var alphabet_count = {}

var output_array = [] //we cannot use break or continue in ternary operator. so we push the character into an array in the ternary condition.

// pattern.map(items => items in alphabet_count ? output_array.push[items] : alphabet_count[items] = 1 ) won't work because pattern.map only works on arrays and pattern is a string

pattern.split("").map(items => items in alphabet_count ? output_array.push(items) : alphabet_count[items] = 1) // instead of pattern.split, we can use Array.from(pattern) method

console.log("**** the output array contents are****")
console.log(output_array)

console.log(`****the first recusing alphabet in pattern is: ${output_array[0]}****`)


