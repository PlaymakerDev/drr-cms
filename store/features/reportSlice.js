import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const name = "report"

export const initialState = {
  report: {
    overview: {
      search: [],
      data: [],
      meta: {
        page: 1,
        total: 0,
        page_size: 10,
        page_count: 0,
        has_previous_page: false,
        has_next_page: false
      }
    },
    detail: {
      data: {}
    },
  },
  report_get_detail: {
    data: [
      {
        year_month: '',
        total: '',
        status_2: '',
        status_3: '',
      }
    ],
    search: {
      page: 1,
      page_size: 10
    }

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
    report_get: (state, action) => {
      state.report.overview.search = action.payload.params,
        state.report.overview.data = action.payload.data.data,
        state.report.overview.meta = action.payload.data.meta
    },
    report_get_detail: (state, action) => {
      state.report_get_detail.search = action.payload.params,
        state.report_get_detail.data = action.payload.data.data
    }

  }
})

export const {report_get,report_get_detail} = slice.actions

export default slice.reducer
