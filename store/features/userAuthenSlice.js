import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const name = "userAuthen"

export const initialState = {
  username: '',
  role: '',
  token: '',
}

export const slice = createSlice({
  name,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return state = {
        ...state,
        ...(action?.['payload']?.[name] || {})
      };
    });
  },
  reducers: {
    signIn: (state, action) => {
      state.username = action.payload.username
      // state.password = action.payload.password
      // state.prefix = action.payload.prefix
      // state.firstname = action.payload.firstname
      // state.lastname = action.payload.lastname
      state.role = action.payload.role
      // state.role = 'Staff'
      state.token = action.payload.token
      //Ohm Dev
    },
    signOut: (state, action) => {
      state = initialState
    },
    refreshToken: (state, action) => {
      state.token = action?.payload?.token
      state.role = action?.payload?.role
      state.username = action?.payload?.username
      state.expiringDate = action?.payload?.expiringDate
      state.refCode = action?.payload?.refCode || null
    },
    tokenExpired: (state, action) => {
      location.replace(`${config.basePath}/session-expired?role=${state.role[0]}`)
      state = initialState
    }
  }
})
export const selectUsername = (state) => state[name].username;
export const selectRole = (state) => state[name].role;


export const { signIn, signOut , refreshToken , tokenExpired} = slice.actions

export default slice.reducer
