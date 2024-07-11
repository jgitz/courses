/* 

- ASYNC and AWAIT : is a new feature in JS which enables you to write async codes like synchronous codes i.e in sequence

  - this feature is built to be operated on functions which has async codes in Promise form

  - set constant variables to regular function that has async promise code and add AWAIT keyword

  - wrap the above function inside another function which is preceeded by ASYNC keyword

  - to return errors.... the await codes are enclosed in try{} block and for error use catch(error){} block

  - eg 

      async function wrapper_function() {

       try {const <variable1> = await regular_function_1_with_promises()

        const <variable2> = await regular_function_2_with_promises()}
      } catch(error) {
        console.log(error)
      }

      ** now to consume this do

          wrapper_function()

      

** using async and await we don't have to use .then chaining anymore.... but it happens in background

*/