/* 

- functions in js : functions in js are FIRST CLASS OBJECTS/CITIZENS. It
    - can be stored in a variable
    - can be passed into another function as an argument
    - can be returned from another function (closure)

- HIGHER ORDER FUNCTIONS : a function with another function as an argument is knnown as higher order function.

- CALL BACK FUNCTIONS : a function that gets invoked and executed from inside of another function is called callback functions



*/

/* 
write some function to greet a person with good morning and good afternoon with help of higher  order function and callback functions
*/

function morning(name) {
    console.log(`good morning ${name}`)
}

function afternoon(name) {
    console.log(`good afternoon ${name}`)
}

function greet(name, morning_or_afternoon_function) /* greet is a higher order function */ {
    console.log(morning_or_afternoon_function(name)) // this is call back function
}

greet("jerald", morning)  // good morning jerald ** no need to invoke the morning function in argument with ()

greet("jerald", afternoon) // good afternoon jerald ** no need to invoke the afternoon function in argument with ()

/* 
** in the above example
    - ** GREET function is a higherorder function because it accepts morning/evening function as an argument
        - ** when giving a function as an argument inside a higher order function. You don't need to invoke it with ()

    - ** MORNING and EVENING functions are call back functions as they are invoked inside the greet function

    - ** methods to invoke a callback function
        1) - if the function is already defined globally. call it using the function name without the () (referencing)

        2) - if the function is not defined globally. write the function as an anonymous function 

        3) - if the function is not defined globally. call it using ARROW function ( my preference  )
*/

