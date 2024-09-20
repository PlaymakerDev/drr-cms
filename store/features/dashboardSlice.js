import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const name = "dashboard"

export const initialState = {
  daily_weighed_vehicles_sum: {
    search: {
      date: '',
    },
    data: {
      items: [],
      all_sum: {
        total: 0,
        over: 0
      }
    }
  },
  vehicle_weight_inspection: {
    search: {
      date: '',
      number_day: null,
      staion_type_id: null
    },
    data: []
  },
  way_traffic: {
    top_vehicle: {
      search: {
        limit: null,
        start_date: '',
        end_date: ''
      },
      data: []
    }
  },
  way: {
    transaction: {
      search: {
        date: '',
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
    display: {
      id: null,
      way_code: "",
      Province: "",
      dept_group: "",
      dept_id: "",
      name: "",
      subdistrict: "",
      district: "",
      distance: ""
    },
    detail: {
      id: null,
      way_code: "",
      Province: "",
      dept_group: "",
      dept_id: "",
      name: "",
      subdistrict: "",
      district: "",
      distance: ""
    }
  },
  weight_wim_over: {
    search: {
      td_id: null
    },
    data: {
      td_id: "",
      t_id: "",
      enf_id: "",
      way_id: null,
      time_stamp: "",
      vehicle_class_id: null,
      material_name: null,
      lp_head_no: "",
      lp_head_province_id: "",
      lp_tail_no: null,
      lp_tail_province_id: null,
      gross_weight: "",
      gross_weight_over: "",
      legal_weight: "",
      is_over_weight: "",
      driver_name: null,
      last_update: "",
      image_01_name: "",
      image_02_name: "",
      vehicle_number: null,
      axle_count: "",
      lane: "",
      speed: "",
      length: null,
      front_over_hang: null,
      rear_over_hang: null,
      esal: null,
      esal2: null,
      esal3: null,
      axle_01_seperation: null,
      axle_01_weight: null,
      axle_01_max: null,
      axle_01_group: null,
      axle_01_tire_code: null,
      axle_02_seperation: null,
      axle_02_weight: null,
      axle_02_max: null,
      axle_02_group: null,
      axle_02_tire_code: null,
      axle_03_seperation: null,
      axle_03_weight: null,
      axle_03_max: null,
      axle_03_group: null,
      axle_03_tire_code: null,
      axle_04_seperation: null,
      axle_04_weight: null,
      axle_04_max: null,
      axle_04_group: null,
      axle_04_tire_code: null,
      axle_05_seperation: null,
      axle_05_weight: null,
      axle_05_max: null,
      axle_05_group: null,
      axle_05_tire_code: null,
      axle_06_seperation: null,
      axle_06_weight: null,
      axle_06_max: null,
      axle_06_group: null,
      axle_06_tire_code: null,
      axle_07_seperation: null,
      axle_07_weight: null,
      axle_07_max: null,
      axle_07_group: null,
      axle_07_tire_code: null,
      axle_08_seperation: null,
      axle_08_weight: null,
      axle_08_max: null,
      axle_08_group: null,
      axle_08_tire_code: null,
      axle_09_seperation: null,
      axle_09_weight: null,
      axle_09_max: null,
      axle_09_group: null,
      axle_09_tire_code: null,
      axle_10_seperation: null,
      axle_10_weight: null,
      axle_10_max: null,
      axle_10_group: null,
      axle_10_tire_code: null,
      axle_11_seperation: null,
      axle_11_weight: null,
      axle_11_max: null,
      axle_11_group: null,
      axle_11_tire_code: null,
      axle_12_seperation: null,
      axle_12_weight: null,
      axle_12_max: null,
      axle_12_group: null,
      axle_12_tire_code: null,
      axle_13_seperation: null,
      axle_13_weight: null,
      axle_13_max: null,
      axle_13_group: null,
      axle_13_tire_code: null,
      axle_14_seperation: null,
      axle_14_weight: null,
      axle_14_max: null,
      axle_14_group: null,
      axle_14_tire_code: null
    }
  },
  cctv: {
    data: []
  },
  work_plan_actual_way: {
    search: {
      year: '',
      department_id: null
    },
    data: {
      item: {
        planWays: [],
        actualWays: []
      },
      all_sum: {
        actual_way_total: 0,
        plan_way_total: 0
      }
    }
  },
  work_plan_actual: {
    search: {
      year: '',
      department_id: null
    },
    data: {
      item: {
        plans: [],
        actuals: []
      },
      all_sum: {
        actual_total: 0,
        plan_total: 0
      }
    }
  },
  view_sum_plan_chart: {
    data: {
      item: [],
      all_sum: {
        plan_total: 0,
        result_total: 0
      }
    }
  },
  sum_weight_year: {
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
    getDailyWeighedVehiclesSum: (state, action) => {
      state.daily_weighed_vehicles_sum.data = action.payload.data.data,
        state.daily_weighed_vehicles_sum.search = action.payload.params
    },
    getVehicleWeightInspection: (state, action) => {
      state.vehicle_weight_inspection.data = action.payload.data.data,
        state.vehicle_weight_inspection.search = action.payload.params
    },
    getWayTraffic: (state, action) => {
      state.way_traffic.top_vehicle.data = action.payload.data.data,
        state.way_traffic.top_vehicle.search = action.payload.params
    },
    getWeightWIMOver: (state, action) => {
      state.weight_wim_over.data = action.payload.data.data,
        state.weight_wim_over.search = action.payload.params
    },
    getWayDisplay: (state, action) => {
      state.way.display = action.payload.data.data
    },
    getWayDetail: (state, action) => {
      state.way.detail = action.payload.data.data
    },
    getWayTransaction: (state, action) => {
      state.way.transaction.data = action.payload.data.data,
        state.way.transaction.meta = action.payload.data.meta,
        state.way.transaction.search = action.payload.params
    },
    getWorkPlanActual: (state, action) => {
      state.work_plan_actual.data = action.payload.data.data,
        state.work_plan_actual.search = action.payload.params
    },
    getViewSumPlanChart: (state, action) => {
      state.view_sum_plan_chart.data = action.payload.data
    },
    getCCTV: (state, action) => {
      state.cctv.data = action.payload.data.data
    },
    getSumWeightYear: (state, action) => {
      state.sum_weight_year.data = action.payload.data.data
    },
  }
})

export const {
  getDailyWeighedVehiclesSum,
  getVehicleWeightInspection,
  getWayTraffic,
  getWayDisplay,
  getWayDetail,
  getWayTransaction,
  getWeightWIMOver,
  getWorkPlanActualWay,
  getWorkPlanActual,
  getViewSumPlanChart,
  getCCTV,
  getSumWeightYear,
} = slice.actions

export default slice.reducer
