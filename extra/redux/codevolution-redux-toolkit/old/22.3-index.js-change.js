/* index.js */

const store = require("./app/store") /* 20.3 */

const cakeActions = require("./features/cake/cakeSlice").cakeActions /* 20.3 */

const { iceCreamActions } = require("./features/iceCream/iceCreamSlice") /* 21.1 */  

console.log('initial state', store.getState()) /* 20.3 */

const unsubscribe = store.subscribe(() => console.log("updated state", store.getState())) /* 20.3 */

// store.dispatch(cakeActions.ordered()) /* 20.3 */
// store.dispatch(cakeActions.ordered()) /* 20.3 */
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3)) /* 20.3 */

// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(3))
// unsubscribe() /* 20.3 */

