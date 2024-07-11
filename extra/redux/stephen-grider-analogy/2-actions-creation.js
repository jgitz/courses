/* action is a function that takes parameters and return type and payload */


// types of forms


// 1 create claim form action


const createClaim_action = (name, claim_amount) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amount: claim_amount
    }
  }
}


// 2 create policy action

const createPolicy_action = (name) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: 20 /* $20 */
    }
  }
}

// 3 delete policy action

const deletePolicy_action = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  }
}







