/* 

- array spread operator is used to individually spread the array elements to do variety of functions


- difference between array destructuring and spread operator? 

  ** array destructuring is used to create a new variable out of an array elements.... 

  ** array spread operator is just used to distribute or lay down individual elements of an array

**** spread operator DOES NOT work on TEMPLATE LITERALS ``

*/

// spread operator uses

// 1) create a new array by merging an existing array

    const array = [3, 4, 5]

    console.log(...array) // 3 4 5; no comma and is not an array

    const newArray = [1, 2, ...array]

    console.log(newArray) // [ 1, 2, 3, 4, 5 ] ; spread operator only creates an array when it is enclosed in []

// 2) to give array elements as an argument into functions


  function sum(a, b, c, d, e) {
    let sum = a + b + c + d + e
    

    console.log(sum)
  }

  sum(...newArray) // 15 ; used spread operator to give arguments into function


// 3) to make shallow copy of an array

    const arrayCopy = [...array]

    console.log(arrayCopy) // [3, 4, 5]


// **** spread operator only creates array when it is enclosed in [] 