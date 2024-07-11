const configureStore = require("@reduxjs/toolkit").configureStore /* 20.2 */

const cakeReducer = require("../features/cake/cakeSlice.js") /* 20.2 */

const iceCreamReducer = require("../features/iceCream/iceCreamSlice.js") /* 21.1 */


const store = configureStore({ /* 20.2 */
  reducer: { /* 20.2 */
    cake: cakeReducer, /* 20.2 */
    iceCream: iceCreamReducer /* 21.1 */
  },

})

module.exports = store /* 20.2 */