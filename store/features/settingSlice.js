import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const name = "setting"

export const initialState = {
  report: {
    data: []
  },
  tblposition: {
    data: {
      success: '',
      position: []
    },
  },
  users: {
    data: []
  },
  user: {
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
  source_type: {
    overview: {
      data: [],
    },
    detail: {
      data: {
        mas_id: '',
        mas_group_code: '',
        mas_group_name: '',
        masCode: '',
        mas_name: '',
        mas_seq: '',
        mas_parent_code: '',
        logo: '',
      },
    },
  },
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
    getTblPosition: (state, action) => {
      state.tblposition.data = action.payload.data
    },
    getUsers: (state, action) => {
      state.users.data = action.payload.data
    },
    getSourceType: (state, action) => {
      state.source_type.overview.data = action.payload.data.data
    },
    getSourceTypeDetail: (state, action) => {
      state.source_type.detail.data = action.payload.data
    },
    getReport: (state, action) => {
      state.report.data = action.payload.data.data
    }
  }})

export const { getTblPosition, getUsers, getSourceType, getSourceTypeDetail, getReport } = slice.actions

export default slice.reducer
