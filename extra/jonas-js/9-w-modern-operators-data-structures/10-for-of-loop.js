/* 

- for of loop: is a new syntax in js to easily loop over arrays. The advantages of for of loop are:

    ** no need for counter and stopping condition inside for loop

    ** suppports use of CONTINUE and BREAK inside the code block ( not all array looping supports continue and break )

**** for of DOES NOT work with OBJECT
*/

// for of in arrays

 const array = [1, 2, 3, 4, 5]

 for (let item of array) {
  console.log(item)
 } /* 
 
1
2
3
4
5
 
 */



