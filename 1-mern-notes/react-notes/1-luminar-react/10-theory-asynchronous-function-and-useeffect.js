/* 
inside use effect hook..... inside the MOUNTING/effect part, we need we give functions as ARROW functions..... arrow functions is assigned to a variable name.....


*/

/* ++++++++++ASYNCHRONOUS FUNCTION AND AWAIT+++++++

inside use effect hook mounting/effect part we use arrow function..... many of the arrow functions in the project should handle requests ASYNCHRONOUSLY..... so we must SET a FUNCTION asynchronous..... and AWAIT keyword should be used before the CODE line that does the ASYNCHRONOUS request handling.... eg

.... eg.... use an arrow function inside use effect mounting part to fetch json data from a file..... using asynchronous and await.....

                    useEffect() => {
                        const fetch_arrow_function_variable = ASYNC () => {
                            
                            AWAIT fetch("./<json file path>").then( then codes)
                        }
                    }




*/