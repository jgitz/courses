const store = require("./app/store") /* 20.3 */

const cakeActions = require("./features/cake/cakeSlice").cakeActions /* 20.3 */

const { iceCreamActions } = require("./features/iceCream/iceCreamSlice") /* 21.1 */ 

const fetchUsers = require("./features/user/userSlice").fetchUsers /* 24.2 */

console.log('initial state', store.getState()) /* 20.3 */

const unsubscribe = store.subscribe(() => {}) /* 20.3 */ /* 22.3 *** removed console.log message since logger middleware is used */

// store.dispatch(cakeActions.ordered()) /* 20.3 */
// store.dispatch(cakeActions.ordered()) /* 20.3 */
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3)) /* 20.3 */

// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(3))
// unsubscribe() /* 20.3 */

store.dispatch(fetchUsers()) /* 24.2 */

/* **** always set empty arrow function inside subscribe() when logger middleware is used */

