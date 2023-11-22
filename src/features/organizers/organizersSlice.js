import { createSlice } from "@reduxjs/toolkit";

const organizerSlice = createSlice({
  name: "organizer",
  initialState: {
    organizers: [],
    selectedOrganizer: null,
    loading: false,
    error: null,
  },
  reducers: {
    addOrganizer: (state, action) => {
      const { organizer } = action.payload;
      state.organizers.push(organizer);
    },
    selectOrganizer: (state, action) => {
      state.selectedOrganizer = action.payload;
    },
  },
});

export const { addOrganizer, selectOrganizer } = organizerSlice.actions;
export const selectOrganizers = (state) => state?.organizer?.organizers;
export const selectSelectedOrginizer = (state) =>
  state?.organizer?.selectedOrganizer;
export default organizerSlice.reducer;
