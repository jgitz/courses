/* 

- SET: is a new data structure in js....

          ** set takes iterabales as input such as arrays and strings

          ** set only outputs unique values once inside a {} separated by commas , i.e no repetitions

          ** set is iterable using for of

          ** spread operator can be used on sets

- SET CREATION SYNTAX: 

    const <> = new Set(<any iterable such as string or array>)

**** set only takes input as arrays and other iterables

**** set elements has no index number

**** no set method is there to retrieve set elements to do operations

**** if you want to do operations on elements.... you need to store it in ARRAY

*/

const number_set = new Set([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])

console.log(number_set) // { 1, 2, 3, 4 }

const string_set = new Set("teddy")

console.log(string_set) // { 't', 'e', 'd', 'y' }

