import { createSlice } from '@reduxjs/toolkit'
import Search from 'antd/es/transfer/search';
import { HYDRATE } from 'next-redux-wrapper';

const name = "complaintListing"

export const initialState = {
  complaints_get: {
    search: {
      page: 1,
      source_type: '',
      notified_office: '',
      complaint_type: '',
      category_type: '',
      status: '',
      document: '',
      endDate: '',
      startDate: ''
    },
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
  complaints_get_detail: {
    data: {
      cid: '',
      source_type: '',
      date_received: '',
      anonymous: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      additional_contact: '',
      category_type: '',
      complaint_type: '',
      province: '',
      district: '',
      sub_district: '',
      road: '',
      latitude: '',
      longitude: '',
      area: '',
      attachment_received1: '',
      attachment_received2: '',
      attachment_received3: '',
      attachment_received4: '',
      attachment_received5: '',
      document: '',
      date_closed: '',
      explanation_result: '',
      attachment_closed1: '',
      attachment_closed2: '',
      attachment_closed3: '',
      attachment_closed4: '',
      attachment_closed5: '',
      status: '',
      receive_at: '',
      progress_at: '',
      terminate_at: '',
      created_at: '',
      updated_at: '',
      created_by: '',
      updated_by: '',
      deleted_at: '',
      deleted_by: '',
      notified_office: '',
      complaint_other: ''
    }
  }
};


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
    complaints_get: (state, action) => {
      state.complaints_get.search = action.payload.params,
        state.complaints_get.data = action.payload.data.data,
        state.complaints_get.meta = action.payload.data.meta
    },
    complaints_get_detail: (state, action) => {
      state.complaints_get_detail.data = action.payload.data
    }
  }
});

export const {
  complaints_get,
  complaints_get_detail
} = slice.actions

export default slice.reducer
