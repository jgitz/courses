const createSlice = require("@reduxjs/toolkit").createSlice /* 19.2 */

const initialState = { /* 19.2 */
  noOfCakes: 10
}

const cakeSlice = createSlice({ /* 19.2 */
  name: "cake", /* 19.2 */
  initialState, /* 19.2 */
  reducers: { /* 19.2 */
    ordered: (state) => { /* 19.2 */
      state.noOfCakes--
    },

    restocked: (state, action) => { /* 19.2 */
      state.noOfCakes += action.payload
    }
  } /* 19.2 */

}) /* 19.2 */

module.exports = cakeSlice.reducer /* 19.2 default export */

module.exports.cakeActions = cakeSlice.actions /* 19.2 named exports */

/* ***** inside cakeSlice.... check the spelling of key reducers and not reducer */

/* ***** cakeSlice.reducer and cakeSlice.actions are methods of createSlice */

