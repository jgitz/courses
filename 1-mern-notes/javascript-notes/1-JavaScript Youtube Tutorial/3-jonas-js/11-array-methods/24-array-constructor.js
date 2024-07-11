/* 

- ARRAY CONSTRUCTOR FUNCTION:

    ** SYNTAX

        const <> = new Array()

    **we can use array constructor function to do the following

        1) CREATE NEW ARRAY: array elements are passed as arguments inside the constructor function ()

            const <> = new Array(<element1>, <element2>)

        2) CREATE AN EMPTY ARRAY WITH FIXED LENGTH: specifying a single digit number inside the constructor function makes an empty array with length of that number 

            const <> = new Array(<length number>)

*/

// create new array using constructor function

  const array1 = new Array(1, 2, 3, 4, 5)

  console.log(array1) // [ 1, 2, 3, 4, 5 ]

// create an empty array of fixed length


  const array2 = new Array(5)

  console.log(array2) // [ <5 empty items> ]; ** there are 5 empty spaces where we can add elements dynamically via various mehtods