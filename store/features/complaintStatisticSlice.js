import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const name = "complaintStatistic";

export const initialState = {
  all_complain: {
    search: {
      startDateSearch: "",
      endDateSearch: "",
    },
    data: [],
  },
  compare_process_close_of_complain: {
    complain: {
      search: {
        startDateSearch: "",
        endDateSearch: "",
        category_type: "",
      },
      data: {
        status: [],
        complaint_type: {
          series: [],
          lebels: [],
        },
      },
    },
    service: {
      search: {
        startDateSearch: "",
        endDateSearch: "",
        category_type: "",
      },
      data: {
        status: [],
        complaint_type: {
          series: [],
          lebels: [],
        },
      },
    },
  },

  request_service:{
    progress_by_date_range:{
      search:{
        startDateSearch: "",
        endDateSearch: "",
      },
      data:{
        series:[],
        labels:[]
      }
      
    },
    department_complain:{
      search:{
        deptType : "",
        startDateSearch : "",
        endDateSearch  : ""
      },
      data:{
        series:[],
        labels:[]
      }
    }
  }
};

export const slice = createSlice({
  name,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return (state = {
        ...state,
        ...(action?.["payload"]?.[name] || {}),
      });
    });
  },
  reducers: {
    getAll_Complain: (state, action) => {
      (state.all_complain.search = action.payload.params),
        (state.all_complain.data = action.payload.data);
    },
    getCompare_Process_Close_Of_ComplainForComplain: (state, action) => {
      (state.compare_process_close_of_complain.complain.search = action.payload.params),
      (state.compare_process_close_of_complain.complain.data = action.payload.data);
    },
    getCompare_Process_Close_Of_ComplainForService: (state, action) => {
      (state.compare_process_close_of_complain.service.search = action.payload.params),
      (state.compare_process_close_of_complain.service.data = action.payload.data);
    },
    getProgress_by_date_range: (state, action) => {
      (state.request_service.progress_by_date_range.search  = action.payload.params),
      (state.request_service.progress_by_date_range.data  = action.payload.data);

    },
    getDepartment_complain: (state, action) => {
      (state.request_service.department_complain.search  = action.payload.params),
      (state.request_service.department_complain.data  = action.payload.data);
    }

  },
});

export const {
  getAll_Complain,
  getCompare_Process_Close_Of_ComplainForComplain,
  getCompare_Process_Close_Of_ComplainForService,
  getProgress_by_date_range,
  getDepartment_complain
} = slice.actions;

export default slice.reducer;
