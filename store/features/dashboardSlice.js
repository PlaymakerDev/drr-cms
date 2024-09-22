import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const name = "dashboard";

export const initialState = {
  top3_complain: {
    search: {
      dateSearch: "",
    },
    data: {
      graph: {
        series: [],
        labels: [],
      },
      data: [],
    },
  },
  top3_progress: {
    search: {
      dateSearch: "",
    },
    data: {
      series: [],
      labels: [],
    },
  },
  most_popular: {
    search: {
      dateSearch: "",
    },
    data: [],
  },
  compare_process_close: {
    search: {
      dateSearch: "",
    },
    data: [],
  },
  compare_process_close_2years: {
    search: {
      dateSearch: "",
    },
    data: {
      series: [],
      labels: [],
    },
  },
  count_complaints: {
    search: {
      dateSearch: "",
    },
    data: {
      series: [],
      labels: [],
    },
  },
  count_complain_type: {
    search: {
      dateSearch: "",
    },
    data: {
      series: [],
      labels: [],
      top3: [],
    },
  },
  top3_department_complain: {
    search: {
      dateSearch: "",
    },
    data: [],
  },
  latest_complain: {
    search: {
      dateSearch: "",
    },
    data: [],
  },
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
    getTop3Complain: (state, action) => {
      (state.top3_complain.search = action.payload.params),
        (state.top3_complain.data = action.payload.data);
    },
    getTop3_Progress: (state, action) => {
      (state.top3_progress.search = action.payload.params),
        (state.top3_progress.data = action.payload.data);
    },
    getMost_Popular: (state, action) => {
      (state.most_popular.search = action.payload.params),
        (state.most_popular.data = action.payload.data);
    },
    getCompare_Process_Close: (state, action) => {
      (state.compare_process_close.search = action.payload.params),
        (state.compare_process_close.data = action.payload.data);
    },
    getCompare_Process_Close_2Years: (state, action) => {
      (state.compare_process_close_2years.search = action.payload.params),
        (state.compare_process_close_2years.data = action.payload);
    },
    getCount_Complaints: (state, action) => {
      (state.count_complaints.search = action.payload.params),
        (state.count_complaints.data = action.payload.data);
    },
    getCount_Complain_Type: (state, action) => {
      (state.count_complain_type.search = action.payload.params),
        (state.count_complain_type.data = action.payload.data);
    },
    getTop3_Department_Complain: (state, action) => {
      (state.top3_department_complain.search = action.payload.params),
        (state.top3_department_complain.data = action.payload.data);
    },
    getLatest_Complain: (state, action) => {
      (state.latest_complain.search = action.payload.params),
      (state.latest_complain.data = action.payload.data);
    }
  },
});

export const {
  getTop3Complain,
  getTop3_Progress,
  getMost_Popular,
  getCompare_Process_Close,
  getCompare_Process_Close_2Years,
  getCount_Complaints,
  getCount_Complain_Type,
  getTop3_Department_Complain,
  getLatest_Complain,
} = slice.actions;

export default slice.reducer;
