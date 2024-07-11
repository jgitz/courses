/* 

- ENTRIES METHOD: is an ARRAY method that would give ELEMENT VALUES and INDEX number of the array elements

    ** the output of <array>.entries() is an a  list of array.... one array for each element where the 1st element is the INDEX NUMBER and the 2nd element is the element value

    ** USE CASE: used to manipulate the INDEX number of arrays

*/

// example of entries() method

const array = ["one", "two", "three", "four", "five"]

console.log([...array.entries()]) /* 

[
  [ 0, 'one' ],
  [ 1, 'two' ],
  [ 2, 'three' ],
  [ 3, 'four' ],
  [ 4, 'five' ]
] 

; here we use ... and wrap the whole method inside an array to display the result

*/

// use case: if you want to list items with SERIAL NUMBERS starting with 1 (array index ); eg ROLL NUMBER of STUDENTS 

const rollNumber = ["Jerry", "Maakaan", "Muthu", "Sahal", "Teddy"]

for (item of rollNumber.entries()) {
  console.log(`Roll No: ${item[0] + 1} : ${item[1]}
  `)
}/* 

Roll No: 1 : Jerry
Roll No: 2 : Maakaan
Roll No: 3 : Muthu
Roll No: 4 : Sahal
Roll No: 5 : Teddy

*/