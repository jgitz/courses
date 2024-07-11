const createSlice = require("@reduxjs/toolkit").createSlice /* 21.1 */


const initialState = { /* 21.1 */
  noOfIceCreams: 20, /* 21.1 */
}

const iceCreamSlice = createSlice({ /* 21.1 */
  name: "iceCream", /* 21.1 */
  initialState, /* 21.1 */
  reducers: { /* 21.1 */
    ordered: (state) => { /* 21.1 */
      state.noOfIceCreams -- /* 21.1 */
    },

    restocked: (state, action) => { /* 21.1 */
      state.noOfIceCreams += action.payload
    } 
  },

  extraReducers: (builder) => {
    builder.addCase()
  }

}) /* 21.1 */

module.exports = iceCreamSlice.reducer /* 21.1 */

module.exports.iceCreamActions = iceCreamSlice.actions /* 21.1 */

