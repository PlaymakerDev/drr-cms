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
      state.top3_complain.search = action.payload.params,
        state.top3_complain.data = action.payload.data
    }
  },
});

export const { getTop3Complain } = slice.actions;

export default slice.reducer;
