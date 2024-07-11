/* 

- object looping: can be used via FOR IN loop

    ** the iterations are done on the KEYs of the OBJECT 

    ***** DON'T need LET KEYWORD for i variable

*/

const obj = {
  one: 1, 
  two: 2, 
  three: 3
}

for( i in obj) {
  console.log(i, obj[i] );
} /* o/p

one 1
two 2
three 3

*/