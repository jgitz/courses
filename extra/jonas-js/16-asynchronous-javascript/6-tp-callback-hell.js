/* 

- CALL BACK HELL : is a term which refers to a CALLBACK function with MULTIPLE CALLBACK FUNCTIONS inside it 

    - DISADVANTAGES of callback hell: 

        - difficult to read the code 
        - difficult to solve the bug 

    ** solution for to avoid callback hell is PROMISES 

- AJAX XML CALLS and callbacks: if we want an ajax xml request to get data.... and then to trigger another ajax xml request call based on that data.... we need to write the 2nd ajax request INSIDE THE CALLBACK of LOAD EVENT LISTENER CALLBACK of the first function

    ** in conclusion.... this results in CALLBACK HELL and this is UNDESIRABLE

*/

// CALLBACK HELL EXAMPLE using SET TIMEOUT FUNCTION : multiple settimeout is used inside a settimeout callback function

setTimeout(() => {
  console.log("1 second passed")
  setTimeout(() => {
    console.log("2 second passed")
    setTimeout(() => {
      console.log("3 seconds passed")
    }, 1000)

  }, 1000)
}, 1000) /*  o/p

1 second passed
2 second passed
3 seconds passed

*/

// **** triangle pattern format of code in a js file is a vague indicatior for CALLBACK HELL