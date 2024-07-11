/* 

- SORT METHOD: is an array method in JS to SORT elements, string, numbers in ascending or descending orders... it can also sort based on conditions

- COMPARE FUNCTION: inside SORT method.... it uses COMPARE FUNCTION to compare two values and do the sorting

  ** compare function takes 2 arguments to compare.... 
      1) current value (say a)
      2) next value (say b)

  ** ASCENDING SORTING CONDITIONS 

      - if first value < second value
          * the function returns a -ve number ( we can set it.... standard is -1)

          * sort method places first value before second value

      - if first value is > second value

          * the function returns a +ve number (we can set it.... standard is 1)

          * then sort method places second value before first value

      - if first value = second value 

          * the function returns 0 

          * then sort method do not change the places of the values

    ** DESCENDING SORTING CONDITIONS 

      - if first_value > second value 

          * return -ve number (standard is -1)

          * sort method places first_value before second_value

      - if first_value < second value

          * return +ve number (standard is +1)

          * sort method places second_value before first_value

      - if first_value = second_value

          * return 0

          * sort method do not change the places of the values

***** comparison function only operates inside SORT METHOD..... it has no existance outside sort method

**** mutates the original array

*/

const numbersArray = [2, 3, 0, 1, -1]

// ascending sort using sort method and compare function

const ascendingSort = numbersArray.sort((a, b) => {
  if (a < b) {
    return -1

  } else if (a > b) {
    return 1

  } else {
    return 0
  }
})

console.log(ascendingSort) // [ -1, 0, 1, 2, 3 ]

// descending sort using sort method and compare functios

const descendingSort = numbersArray.sort((a, b) => {
  if (a > b) {
    return -1

  } else if (a < b) {
    return 1

  } else {
    return 0
  }

})

console.log(descendingSort) // [ 3, 2, 1, 0, -1 ]

