// now we've created store (whole insurance company) with reducers (departments) and dispatch (form reciever) and actions (forms).... now we are the client..... 

// to create a policy for alex

store.dispatch(createPolicy_action("Alex"))


// to check state array (all data store)

console.log(store.getState())