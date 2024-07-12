/* 
sometimes we want to REMOVE items from an array and MAKE ARRAY out of REMOVED items.. so we use splice....

<array>.splice(<start index>, <number of items to be removed right of index>)

- we can also add items using splice

***** splice method is MUTABLE. it changes the original array when making new array from the removed items from the original array

*/

let mixed = ["mon", "tue", "wed","jan", "feb", "mar"]

let months = mixed.splice(3, 3)

console.log(months) // [ 'jan', 'feb', 'mar' ]