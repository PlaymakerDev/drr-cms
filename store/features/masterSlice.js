import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const name = "master"

export const initialState = {
  station: {
    all: [],
    detail: {
      station_id: null,
      station_name: "",
      station_description: "",
      station_type: null,
      province_id: null,
      latitude: "",
      longtitude: "",
      total: 0,
      over: 0,
      is_enable: 0,
      enf_id: null,
      ip_address: null,
      last_update: ""
    }
  },
  wim: {
    all: [],
    detail: {
      station_id: null,
      station_name: "",
      station_description: "",
      location_description: "",
      station_type: null,
      province_id: null,
      latitude: "",
      longtitude: "",
      total: 0,
      over: 0,
      is_enable: 0,
      enf_id: null,
      ip_address: "",
      last_update: "",
      owner: ""
    }
  },
  departments: {
    overview: {
      search: {
        order: 'ASC',
        page: 1,
        page_size: 10
      },
      data: [],
      meta: {
        page: 1,
        page_size: 10,
        total: 0,
        page_count: 0,
        has_previous_page: false,
        has_next_page: false
      }
    },
    detail: {
      id: null,
      name: "",
      type: null,
      group: null,
      province: "",
      group_drr: null,
      station_id: null,
      office_no: null,
      name2: ""
    }
  },
  spot: {
    all: [],
    detail: {
      id: null,
      name: "",
      type: null,
      group: null,
      province: "",
      group_drr: null,
      station_id: null,
      office_no: null,
      name2: ""
    }
  },
  station_types: {
    data: []
  },
  collaborative_list: {
    data: []
  },
  way: {
    all: [],
    overview: {
      search: {
        order: 'ASC',
        page: 1,
        page_size: 10
      },
      data: [],
      meta: {
        page: 1,
        page_size: 10,
        total: 0,
        page_count: 0,
        has_previous_page: false,
        has_next_page: false
      }
    },
    detail: {}
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
    getStationType: (state, action) => {
      state.station_types.data = action.payload.data.data
    },
    getDepartment: (state, action) => {
      state.departments.overview.data = action.payload.data.data,
        state.departments.overview.meta = action.payload.data.meta,
        state.departments.overview.search = action.payload.params
    },
    getStation: (state, action) => {
      state.station.all = action.payload.data.data
    },
    getStationDetail: (state, action) => {
      state.station.detail = action.payload.data.data
    },
    getWayAll: (state, action) => {
      state.way.all = action.payload.data.data
    },
    getCollaborativeList: (state, action) => {
      state.collaborative_list.data = action.payload.data.data
    }
  }
})

export const { getStationType, getStation, getStationDetail, getDepartment, getCollaborativeList, getWayAll } = slice.actions

export default slice.reducer
