/* 

- <array>.sort() : sorts the array elements in ascending order.... 

    ** SORT PRIORITY goes from .... SYMBOLS (dot, space quotes etc) > numbers > UPPERCASE> LOWER CASE

- <array>.reverse(): sorts the array elements in the reverse direction.... 

*/

const arr = ["A", 1, 3, "a", 2, "B", "b", " ", "."]

console.log(arr.sort()); /* 

[
  ' ', '.', 1,   2,
  3,   'A', 'B', 'a',
  'b'
]

*/

console.log(arr.reverse()); /* 

[
  'b', 'a', 'B', 'A',
  3,   2,   1,   '.',
  ' '
]

*/