/* 

- sorting number array using comparison condition can be modified using a tweak in return conditions

    ** in case of a < b.... a - b always returns -ve value.... hence ascending sorting happens

    ** in case of a < b ..... b - a always returns +ve value..... hence descending sort happens

**** mutates the original array

*/

const numbersArray = [2, 3, 0, 1, -1]

// ascending sort

const ascendingSort = numbersArray.sort((a, b) => {
  return a - b
})

console.log(ascendingSort) // [ -1, 0, 1, 2, 3 ]

// descending sort

const descendingSort = numbersArray.sort((a, b) => {
  return b - a
})

console.log(descendingSort) // [ 3, 2, 1, 0, -1 ]
