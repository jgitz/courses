async function wrapper_function() {
  try {
    
    const race_variable = await Promise.race([
      Promise.reject("Reject 2"),
      Promise.resolve("Resolved 1"),
      Promise.resolve("Resolved 2"),
      Promise.reject("Reject 1"),
    ])
    
    console.log(race_variable)
  } catch (error) {
    console.log(error.message)
  }
}

wrapper_function()

