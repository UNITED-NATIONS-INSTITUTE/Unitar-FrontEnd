import { createSlice } from "@reduxjs/toolkit";

const hackathonSlice = createSlice({
  name: "hackathon",
  initialState: {
    selectedHackathonDetail: null,
  },
  reducers: {
    setSelectedHackathonDetail: (state, action) => {
      const { selectedHackathonDetail } = action.payload;
      state.selectedHackathonDetail = selectedHackathonDetail;
    },
  },
});

export const { setSelectedHackathonDetail } = hackathonSlice.actions;
export const selectSelectedHackathonDetail = (state) =>
  state?.hackathon?.selectedHackathonDetail;

export default hackathonSlice.reducer;
