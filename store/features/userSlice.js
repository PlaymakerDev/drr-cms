import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const name = "user"

export const initialState = {
  user_get: {
    search: {
      fullname: null,
      page: 1,
      limit: 10,
    },
    data: [],
    meta: {
      currentPage: 1,
      totalItems: 0,
      pageSize: 10,
      totalPages: 0,
      hasPreviousPage: false,
      hasNextPage: false
    }
  },
  user_ldap_get: {
    search: {
      keyword: '',
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
  }
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
    user_get: (state, action) => {
      state.user_get.search = action.payload.params,
        state.user_get.data = action.payload.data.data,
        state.user_get.meta = action.payload.data.meta
    },
    user_ldap_get: (state, action) => {
      state.user_ldap_get.search = action.payload.params,
        state.user_ldap_get.data = action.payload.data,
        state.user_ldap_get.meta = action.payload.meta
    },

  }
})
export const {
  user_get,
  user_ldap_get
} = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state) => state

export default userSlice.reducer
