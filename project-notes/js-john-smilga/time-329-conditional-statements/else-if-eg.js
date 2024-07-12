/* if we want to insert a third condition use else if in BETWEEN if and else

****** we can use AS MANY else if statements in betwee IF and ELSE statements

*/

// ******* NEED FOR ELSE IF eg

const num1 = 1
const num2 = 1
const condition = num1 == num2

if (num1 > num2) {
    console.log("num1 greater than num2")
}

else if (condition) {

    console.log("num1 is equal to num2")
}

else {
    console.log("num2 greater than num1")
}
/* 
o/p

num1 is equal to num2

*/

/* 

what happens if there is no ELSE IF block? : in absence of else if.... the ELSE BLOCK gets executed

*/