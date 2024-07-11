/* 
 write the codes for reducers(departments).... such that what it does with the actions(forms) and the state (corresponding data from all data store)....

 ** we initialise the state with empty array

 ** state is an array or string

 ** when the state is an array... if there is a state change... we have to return a new array....

 ** when the state is a string / number.... if there is a state change.... we DON'T have to return new string/number

*/

// creation of reducers (departments)

// 1) claims department reducer 


  const claimsDepartment = (claims_db = [], action) => {
    switch (action.type) {
      case ("CREATE_CLAIM"):
        return [...claims_db, action.payload]
        

      default:
        return claims_db 
    }

  }

// 2) accounting department reducer

const accountingDepartment = (total_amount_db = 100 /* $100 */, action) => {
  switch (action.type) {
    case ("CREATE_CLAIM"): 
      return total_amount_db - action.payload.amount

    case ("CREATE_POLICY"):

      return total_amount_db + action.payload.amount

    default:

      return total_amount_db


  }
}

// 3 policies department reducer

const policiesDepartment = (policies_db = [], action) => {
  switch (action.type) {
    case ("CREATE_POLICY"):

      return [...policies_db, action.payload.name]

    case ("DELETE_POLICY"): 

      return policies_db.filter(policy_name => policy_name != action.payload.name) /* ** filter out all names that are not equal and make it into an array */

    default:

      return policies_db
  }
}
