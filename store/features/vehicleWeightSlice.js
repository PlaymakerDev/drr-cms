import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const name = "vehicleWeight"

export const initialState = {
  station: {
    overview: {
      search: {
        start_date: '',
        end_date: '',
        station_id: '',
        page: 1,
        page_size: 10,
        ordering: 'ASC'
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
      table: {
        search: {
          start_date: '',
          end_date: '',
          station: '',
          page: 1,
          page_size: 10,
          ordering: 'ASC'
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
      modal: {
        data: {
          td_id: '',
          t_id: '',
          enf_id: '',
          station_id: '',
          time_stamp: '',
          vehicle_class_id: '',
          material_name: '',
          lp_head_no: '',
          lp_head_province_id: '',
          lp_tail_no: '',
          lp_tail_province_id: '',
          gross_weight: '',
          gross_weight_over: '',
          legal_weight: '',
          is_over_weight: '',
          driver_name: '',
          last_update: '',
          images: []
        }
      }
    }
  },
  wim: {
    overview: {
      search: {
        start_date: '',
        end_date: '',
        station_id: '',
        page: 1,
        page_size: 10,
        ordering: 'ASC'
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
  },
  mobile: {
    overview: {
      search: {
        start_date: '',
        end_date: '',
        branch: '',
        page: 1,
        page_size: 10,
        ordering: 'ASC'
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
  },
  summary: {
    overview: {
      search: {
        start_date: '',
        end_date: '',
        search: '',
        page: 1,
        page_size: 10,
        ordering: 'ASC'
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
  },
}

export const slice = createSlice({
  name,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      console.log(state)
      return state = {
        ...state,
        ...(action?.['payload']?.[name] || {})
      };
    });
  },
  reducers: {
    // MAIN PAGE
    getStation: (state, action) => {
      state.station.overview.data = action.payload.data.data,
        state.station.overview.meta = action.payload.data.meta,
        state.station.overview.search = action.payload.params
    },
    getWIM: (state, action) => {
      state.wim.overview.data = action.payload.data.data,
        state.wim.overview.meta = action.payload.data.meta,
        state.wim.overview.search = action.payload.params
    },
    getMobile: (state, action) => {
      state.mobile.overview.data = action.payload.data.data,
        state.mobile.overview.meta = action.payload.data.meta,
        state.mobile.overview.search = action.payload.params
    },
    getSummary: (state, action) => {
      state.summary.overview.data = action.payload.data.data,
        state.summary.overview.meta = action.payload.data.meta,
        state.summary.overview.search = action.payload.params
    },
    // DETAIL PAGE
    getWeightStationLog: (state, action) => {
      state.station.detail.table.data = action.payload.data.data,
        state.station.detail.table.meta = action.payload.data.meta,
        state.station.detail.table.search = action.payload.params
    },
    getWeightStationLogDetail: (state, action) => {
      state.station.detail.modal.data = action.payload.data.data
    },
    // CLEAR
    clearStation: (state) => {
      state.station.overview.search = initialState.station.overview.search
    },
    clearWIM: (state) => {
      state.wim.overview.search = initialState.station.overview.search
    },
    clearMobile: (state) => {
      state.mobile.overview.search = initialState.station.overview.search
    },
    clearSummary: (state) => {
      state.summary.overview.search = initialState.station.overview.search
    },
  }
})

export const {
  // MAIN PAGE
  getStation,
  getWIM,
  getMobile,
  getSummary,
  // DETAIL PAGE
  getWeightStationLog,
  getWeightStationLogDetail,
  // CLEAR
  clearStation,
  clearWIM,
  clearMobile,
  clearSummary,
} = slice.actions

export default slice.reducer
