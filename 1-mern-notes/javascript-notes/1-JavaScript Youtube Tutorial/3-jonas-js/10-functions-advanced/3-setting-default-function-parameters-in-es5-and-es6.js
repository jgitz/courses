/* 

- there are different ways in which we set default values to parameters in ES5 and ES6 versions of JS

** if we don't set default values for parameters and then skip some parameters in arguments... the PARAMETER will take value of UNDEFINED

*/

// if no default value is set to parameters

function sumNoDefault(num1, num2) {


  const sum = num1 + num2
  console.log(typeof(num1))
  console.log(typeof(num2))
  console.log(sum)

}

sumNoDefault() /* 

undefined
undefined
NaN

*/



// ES5 method of setting default values to parameters using short circuiting 

function sumEs5(num1, num2) {
  num1 = num1 || 0
  num2 = num2 || 0

  const sum = num1 + num2
  console.log(sum)

}

sumEs5() // 0

// ES6 method of setting default values to function parameters

function sumEs6(num1= 0, num2 = 0 ) {

  const sum = num1 + num2
  console.log(sum)

}

sumEs6() // 0


