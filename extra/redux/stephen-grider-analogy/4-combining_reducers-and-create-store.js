import {combineReducers, createStore} from "redux"


// now we need to combine all reducers (departments)

const all_reducers = combineReducers({
  claims_dept_reducer : claimsDepartment,
  policy_dept_reducer : policiesDepartment,
  accounting_department_reducer : accountingDepartment
  
})

// creating the store (whole insurance company)

const store = createStore(all_reducers)