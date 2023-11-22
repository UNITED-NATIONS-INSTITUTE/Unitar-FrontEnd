import { createSlice } from "@reduxjs/toolkit";

const participantSlice = createSlice({
  name: "participant",
  initialState: {
    participants: [],
    selectedParticipant: null,
    loading: false,
    error: null,
  },
  reducers: {
    addParticipant: (state, action) => {
      const { participant } = action.payload;
      state.participants.push(participant);
    },
    selectParticipant: (state, action) => {
      state.selectedParticipant = action.payload;
    },
  },
});
export const { addParticipant, selectParticipant } = participantSlice.actions;
export const selectParticipants = (state) => state?.participant?.participants;
export const selectSelectedParticipant = (state) =>
  state?.participant?.selectParticipant;
export default participantSlice.reducer;
