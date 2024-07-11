/* 
<array>.splice(
  <start index from which addition or removal stars (includes this element)>, 
  <number of items to be removed or adder (optional)>,

  "item to be added (optional)",
 
  "item to be added (optional)"

- array splice method is used to add or remove or replace items from an array

- it MODIFIES the original array

- for more info : https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/

*/

// removing

let array = ['monday', "tuesday", "january", "febrauary"]

let months = array.splice(2)

console.log({array}) // [ 'monday', 'tuesday' ] **** array modified

console.log({months}) // [ 'january', 'febrauary' ] 

// adding

let days = array.splice(2, 5, "wed", "thu", "fri", "sat", "sun")

console.log({array}) //  [
//     'monday', 'tuesday',
//     'wed',    'thu',
//     'fri',    'sat',
//     'sun'
//   ] // **** addition happens on original array only doesn't matte you assign it t another variable

console.log({days}) //  []

// replacing

array.splice(4, 3, "january", "february", "march")

console.log({array}) //
/* [
    'monday',  'tuesday',
    'wed',     'thu',
    'january', 'february',
    'march'
  ] */

// adding without removing another item

array.splice(4, 0, "friday", "saturday", "sunday")

console.log({array}) 
/* [
    'monday',   'tuesday',
    'wed',      'thu',
    'friday',   'saturday',
    'sunday',   'january',
    'february', 'march'
  ] */

// remove only specific number of items

let week = array.splice(0, 7)

console.log({week})
/*
 [
    'monday', 'tuesday',
    'wed',    'thu',
    'friday', 'saturday',
    'sunday'
  ]  */

console.log({array})

/* 
 [ 'january', 'february', 'march' ] 
 */



