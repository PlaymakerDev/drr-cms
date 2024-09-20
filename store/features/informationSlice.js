import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

const name = "information"

export const initialState = {
  unit_establishment_plan: {
    workplans: {
      search: {
        year_type: 'ce_year',
        plan_year: '',
        department_id: '',
        page: 1,
        page_size: 10,
        order: 'ASC'
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
  },
  overweight_vehicle: {},
  collaboration_and_integration: {
    collaboration: {
      search: {
        date: '',
        department_id: '',
        way_id: '',
        collaboration: '',
        page: 1,
        page_size: 10,
        order: 'ASC'
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
  },
  vehicle_data_on_routes: {},
  report: {}
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
    getWorkPlans: (state, action) => {
      state.unit_establishment_plan.workplans.data = action.payload.data.data,
        state.unit_establishment_plan.workplans.meta = action.payload.data.meta,
        state.unit_establishment_plan.workplans.search = action.payload.params
    },
    getCollaboration: (state, action) => {
      state.collaboration_and_integration.collaboration.data = action.payload.data.data,
        state.collaboration_and_integration.collaboration.meta = action.payload.data.meta,
        state.collaboration_and_integration.collaboration.search = action.payload.params
    },
    clearCollaboration: (state) => {
      state.collaboration_and_integration.collaboration.search = initialState.collaboration_and_integration.collaboration.search
    },
    clearWorkPlans: (state) => {
      state.unit_establishment_plan.workplans.search = initialState.unit_establishment_plan.workplans.search
    }
  }
})

export const { getWorkPlans, getCollaboration, clearCollaboration, clearWorkPlans } = slice.actions

export default slice.reducer
