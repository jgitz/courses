/* 

- rest operator: is same as spread operator.... the difference is that.....

  * spread operator is used to unpack elements

    ** rest operator is used to collect or pack elements

  * spread operator is used on righthand side of the assignment operator in a destructuring syntax

    ** rest operator is used on the left hand side of the destructuring syntax

** rest also works with object destructuring

**** rest operator should be specified as the last variable on left hand side of destructuring syntax

**** there can only be one rest operator element in destructuring syntax  

*/

const array = [ 1, 2, 3, 4, 5]

const [i, ii, ...rest] = array

console.log(rest) // [ 3, 4, 5 ]