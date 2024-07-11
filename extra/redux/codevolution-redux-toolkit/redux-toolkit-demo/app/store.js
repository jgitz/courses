const configureStore = require("@reduxjs/toolkit").configureStore /* 20.2 */

const cakeReducer = require("../features/cake/cakeSlice.js") /* 20.2 */

const iceCreamReducer = require("../features/iceCream/iceCreamSlice.js") /* 21.1 */

const reduxLogger = require("redux-logger") /* 22.3 */

const userReducer = require("../features/user/userSlice.js") /* 24.2 */

const logger = reduxLogger.createLogger()  /* 22.3 */


const store = configureStore({ /* 20.2 */
  reducer: { /* 20.2 */
    cake: cakeReducer, /* 20.2 */ 
    iceCream: iceCreamReducer, /* 21.1 */
    user: userReducer /* 24.2 */
  },

  middleware: (getDefaultMiddleware) => /* 22.3 */ getDefaultMiddleware().concat(logger),
})

module.exports = store /* 20.2 */