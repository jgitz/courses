/* 

- in es6 default param setting we can

    1) set expressions as parameters

    2) set expression of basis of the previous parameters

**** if all the parameters are set default values.... if you want to skip a parameter while function call.... just add an undefined value in place of the skipped parameter.... THIS ONLY WORKS IF ALL THE PARAMETERS ARE GIVEN A DEFAULT VALUE 


*/

// eg multiplication expression as parameter

function product(num1 = 0, num2 = 1 * 2, num3 = 0 ) {

  const product = num1 * num2 * num3

  console.log(product)

}

product() // 0
product(1) // 0
product(4, 2) // 0
product(4,2,1) // 8

// expression based on previous parameter as default value

function pro(num1 = 0, num2  , num3 = num2 *2) {

  const product = num1 * num2 * num3

  console.log(num1,num2,num3)

  console.log(product)
}

pro() /* 
0 undefined NaN
NaN
 */
pro(1)/* 
1 undefined NaN
NaN
*/
pro(1, 2) /* 
1 2 4
8
 */
