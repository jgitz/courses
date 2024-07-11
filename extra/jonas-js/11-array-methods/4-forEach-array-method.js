/* 

- FOREACH METHOD: is a method used to LOOP over elements of an array

** forEach method takes a CALL BACK FUNCTION as ARGUMENT

** a forEach method applied on an array pushes 3 ARGUMENTS into the CALL BACK FUNCTION 

    1) the array element value
    2) index number of the element
    3) the entire array

    ** we can selectively use these to manipulate each of them

** difference between for each and for of loop is that.... 

    * in forEach... BREAK and CONTINUE statements are not allowed

        ** in FOR OF.... BREAK and CONTINUE statements are allowed

***** a forEach operation output CANNOT be stored inside a variable and this operation won't MUTATE the original array

***** return value of a foreach callback function is always UNDEFINED by default even if you assign any any return value into the callback function

*/

const array = [1, 2, 3, 4, 5]

array.forEach((item, index, array) => {
  console.log(`
  the current element value is: ${item}
  the index number of current element is: ${index}
  the original array is: ${array}
  `)
}) /* 

the current element value is: 1
  the index number of current element is: 0
  the original array is: 1,2,3,4,5


  the current element value is: 2
  the index number of current element is: 1
  the original array is: 1,2,3,4,5


  the current element value is: 3
  the index number of current element is: 2
  the original array is: 1,2,3,4,5


  the current element value is: 4
  the index number of current element is: 3
  the original array is: 1,2,3,4,5


  the current element value is: 5
  the index number of current element is: 4
  the original array is: 1,2,3,4,5 

*/