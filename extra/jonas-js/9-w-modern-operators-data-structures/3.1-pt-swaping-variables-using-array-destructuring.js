/* 
- traditional swaping values of 2 variables need 3 variables where one is used as temporary variable 

- swaping can easily be done using array destructuring syntax with only 2 variables
*/
'use strict'
// traditional swaping

const array = [1, 2]

let [one, two] = array 

console.log(one, two) // 1, 2; before swapping

let temp 

temp = one // step 1

one = two // step 2

two = temp // step 3

console.log(one, two) // 2,1 ; after swaping values


// swaping values using array destructuring

const array2 = [3,4]

let [three, four] = array2

console.log(three, four);

[three, four] = [four, three];

console.log(three, four); // 4,3 

// swaping works for normal variables too

let five = 5
let six = 6

console.log(five, six);  // 5, 6

[five, six] = [six, five];

console.log(five, six); // 6, 5


// *********** always add a ; at end of console.log if there is array destructuring.... else error
