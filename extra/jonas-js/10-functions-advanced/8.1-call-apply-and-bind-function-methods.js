/* 

- there are 3 METHODS to set THIS keyword for a DEFAULT FUNCTION CALL

    1) CALL METHOD
    2) APPLY METHOD (not used)
    3) BIND METHOD

1) CALL METHOD: is used to assign a THIS OBJECT to a function 

    ** syntax 

        <function>.call(<object>, arg1, arg2 etc)

    ** call method immediately executes the function

2) APPLY METHOD: is same as call method but arguments are given as an ARRAY 

    ** syntax 

          <function>.apply(<object>, argument_array_variable)
    
    ** apply method immediately executes the function

    **** APPLY method is NOT USED.... as CALL method can be used with SPREAD OPERATOR on the ARGUMENTS ARRAY VARIABLE like this

        ** syntax

            <function>.call(<object>, ...argument_array)

3) BIND METHOD: call and apply methods immediately execute the function.... but bind method creates a NEW FUNCTION that can be called ANY time

    ** syntax

          const <> = <function>.bind(<object>, arguments if any)

    ** don't execute the function.... instead creates a new function that can be called at our convenience

** USE CASES OF BIND METHOD 

      1) Partial application of function: to store a part of function and argument as variable

      2) Used to bind the HANDLER of EVENT listner to an Object


*/

const namesObject = {
  name: "Jerry"
}

const array = ["Good Morning", "Good Night"]

function greeting(goodMorning, goodNight ) {
  console.log(`${goodMorning} ${this.name}`);
  console.log(`${goodNight} ${this.name}`);
}

// 1) call method

      greeting.call(namesObject, ...array) /* 
      
      Good Morning Jerry
      Good Night Jerry

      */

      greeting.call(namesObject, array[0], array[1]) /* 
      
      Good Morning Jerry
      Good Night Jerry
      
      */

// 2) apply method

      greeting.apply(namesObject, array) /* 
      
      Good Morning Jerry
      Good Night Jerry

      */


// 3) bind method 

        greeting.bind(namesObject, ...array) // **no output because bind method should always be used to set a NEW FUNCTION inside a variable like BELOW

        const bind_function_variable = greeting.bind(namesObject, ...array)

        bind_function_variable() /* 
        
        Good Morning Jerry
        Good Night Jerry

        */

// ** BIND USECASE -: PARTIAL APPLICATION 

     /* partial application means to store function along with one argument inside the bind variable and use it to call the function with argument of our desire */

     const partial_application = greeting.bind(namesObject, "Good Morning") // here we set the good morning as constant 

     partial_application("good good lol") /* 
     
     Good Morning Jerry
     good good lol Jerry

     ; good morning remains constant and we can give anything instead of good night

     */



