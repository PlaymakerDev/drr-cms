import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  role: '',
  token: '',
  username: '',
  firstname: '',
  lastname: '',
  header: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return state = {
        ...state,
        ...(action?.['payload']?.['user'] || {})
      };
    });
  },
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload.token
      state.role = action.payload.role
      state.username = action.payload.username
      state.firstname = action.payload.firstname
      state.lastname = action.payload.lastname
      state.header = action.payload.header || null
    },
    signOut: (state, action) => {
      state = initialState
    },
  }
})
export const { signIn, signOut } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state) => state

export default userSlice.reducer
