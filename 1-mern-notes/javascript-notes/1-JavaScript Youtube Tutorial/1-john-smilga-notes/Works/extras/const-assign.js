// you can declare let and var variables without assigning any value and the file will compile.... but you CANNOT simply DECLARE a CONST variable without assigning any value.... if you do that.... the file won't compile


let let_variable
// const const_variable 
/* above is commented because mere declaration of a const variable will show error.... so instead assign it with zero */

const const_variable = 0

console.log({let_variable}) // output : prints undefined

console.log({const_variable})

