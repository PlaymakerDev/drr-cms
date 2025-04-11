import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const name = "master"

export const initialState = {
  province: {
    search: {
      textSearch: '',
      id: ''
    },
    data: []
  },
  district: {
    search: {
      textSearch: '',
      id: '',
      province_id: ''
    },
    data: []
  },
  sub_district: {
    search: {
      textSearch: '',
      id: '',
      district_id: ''
    },
    data: []
  },
  dropdown: {
    category_type: {
      search: {
        mas_group_code: ''
      },
      data: []
    },
    complaint_type: {
      search: {
        mas_group_code: ''
      },
      data: []
    },
    source_type: {
      search: {
        mas_group_code: ''
      },
      data: []
    },
  },
  department: {
    data: []
  },
  prefix_name: {
    data: []
  },
  position: {
    data: []
  },
  role: {
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
    getProvince: (state, action) => {
      state.province.search = action.payload.params,
        state.province.data = action.payload.data.data
    },
    getDistrict: (state, action) => {
      state.district.search = action.payload.params,
        state.district.data = action.payload.data.data
    },
    getSubDistrict: (state, action) => {
      state.sub_district.search = action.payload.params,
        state.sub_district.data = action.payload.data.data
    },
    getDropdownCategoryType: (state, action) => {
      state.dropdown.category_type.search = action.payload.params,
        state.dropdown.category_type.data = action.payload.data.category_type.category
    },
    getDropdownComplaintType: (state, action) => {
      state.dropdown.complaint_type.search = action.payload.params,
        state.dropdown.complaint_type.data = action.payload.data.category_type.category
    },
    getDropdownSourceType: (state, action) => {
      state.dropdown.source_type.search = action.payload.params,
        state.dropdown.source_type.data = action.payload.data.category_type.category
    },
    getDepartment: (state, action) => {
      state.department.data = action.payload.data.department.department
    },
    getPrefix: (state, action) => {
      state.prefix_name.data = action.payload.data
    },
    getPosition: (state, action) => {
      state.position.data = action.payload.data.position
    },
    getRole: (state, action) => {
      state.role.data = action.payload
    },
    clearProvince: (state) => {
      state.province.data = initialState.province.data
    },
    clearDistrict: (state) => {
      state.district.data = initialState.district.data
    },
    clearSubDistrict: (state) => {
      state.sub_district.data = initialState.sub_district.data
    },
    clearDropdownCategoryType: (state) => {
      state.dropdown.category_type.data = initialState.dropdown.category_type.data
    },
    clearDropdownComplaintType: (state) => {
      state.dropdown.complaint_type.data = initialState.dropdown.complaint_type.data
    },
    clearDropdownSourceType: (state) => {
      state.dropdown.source_type.data = initialState.dropdown.source_type.data
    },
  }
})

export const {
  getProvince,
  getDistrict,
  getSubDistrict,
  getDropdownCategoryType,
  getDropdownComplaintType,
  getDropdownSourceType,
  getDepartment,
  getPrefix,
  getPosition,
  getRole,
  clearProvince,
  clearDistrict,
  clearSubDistrict,
  clearDropdownCategoryType,
  clearDropdownComplaintType,
  clearDropdownSourceType
} = slice.actions

export default slice.reducer
