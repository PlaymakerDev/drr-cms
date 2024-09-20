import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const name = "complaintListing"

export const initialState = {}

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
    
  }
})

export const {  } = slice.actions

export default slice.reducer
