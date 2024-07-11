const axios = require("axios") /* 24.2 */

const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk /* 24.2 */

const createSlice = require("@reduxjs/toolkit").createSlice /* 24.2 */

const initialState = {
  loading: false,
  users: [],
  error: ""
} /* 24.2 */

const fetchUsers = createAsyncThunk("user/fetchUsers", () => { /* 24.2 */
        return axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.data.map(user => user.id)) /* 24.2 */
      })

const userSlice = createSlice({ /* 24.2 */
  name: "user", /* 24.2 */
  initialState, /* 24.2 */
  extraReducers: builder => { /* 24.2 */
    builder.addCase(fetchUsers.pending, (state) => { /* 24.2 */
      state.loading = true /* 24.2 */
    })

    builder.addCase(fetchUsers.fulfilled, (state, action) =>{ /* 24.2 */
      state.loading = false
      state.users = action.payload /* ***** axios fetched data is inside action.payload */
      state.error = ''
    })

    builder.addCase(fetchUsers.rejected, (state, action) => {/* 24.2 */
      state.loading = false
      state.users = []
      state.error = action.error.message
    })
  }
}) /* 24.2 */

module.exports = userSlice.reducer /* 24.2 */
module.exports.fetchUsers = fetchUsers /* 24.2 */

/* 
**** always inside the createAsyncThunk arrow function.... use return keyword.... else error
*/

/*
 ** axios fetched data is inside action.payload

 ** axios error message is stored inside axios.error.message
  */
