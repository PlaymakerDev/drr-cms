import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const name = "dashboard"

export const initialState = {
  top3_complain: {
    search: {
      dateSearch: '',
    },
    data: {
      graph: {
        series: [],
        labels: []
      },
      data: []
    }
  },
  top3_progress: {
    search: {
      dateSearch: '',
    },
    data: {
      series: [],
      labels: []
    },
  },
  most_popular: {
    search: {
      dateSearch: '',
    },
    data: []
  }
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
  }
})

export const {

} = slice.actions

export default slice.reducer
