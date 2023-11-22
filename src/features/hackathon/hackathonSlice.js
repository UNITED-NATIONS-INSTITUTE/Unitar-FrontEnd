import { createSlice } from "@reduxjs/toolkit";

const hackathonSlice = createSlice({
  name: "hackathon",
  initialState: {
    hackathons: [],
    selectedHackathon: null,
    loading: false,
    error: null,
  },
  reducers: {
    addHackathon: (state, action) => {
      const { hackathon } = action.payload;
      state.hackathons.push(hackathon);
    },
    selectHackathon: (state, action) => {
      state.selectedHackathon = action.payload;
    },
  },
});

export const { addHackathon, selectHackathon } = hackathonSlice.actions;

export const selectHackathons = (state) => state?.hackathon?.hackathons;
export const selectSelectedHackathon = (state) =>
  state?.hackathon?.selectedHackathon;

export default hackathonSlice.reducer;
