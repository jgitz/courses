/* 

... there are 3 methods to loop through array 

    1) use simple FOR LOOP 

    2) use FOR IN loop: 
    
        ***** DON'T need LET KEYWORD for i variable

    3) use <array>.foreach() method: 

        ** this takes a CALL BACK function and takes arguments in the order ELEMENT, INDEX, the ARRAY ITSELF

        ** for each DON'T RETURN anything.... if we store the forEach in a variable... the VARIABLE will be UNDEFINED

*/

const arr = [1, 2, 3];

// 1) for loop 

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
  
}
  /* o/p

  0 1
  1 2
  2 3
  
  */

// 2) for in loop 

for (i in arr) {
  console.log(i, arr[i]);
} /* o/p


0 1
1 2
2 3

***** DON'T need LET KEYWORD for i variable


*/



// 3 forEach method loop

arr.forEach(function(e, index, array){
  console.log(index, e)
}) /* o/p

0 1
1 2
2 3

*/


