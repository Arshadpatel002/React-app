// features/feedback/feedbackSlice.js
import { createSlice } from '@reduxjs/toolkit';

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: {
    formOpen: false,
    feedback: '',
  },
  reducers: {
    toggleForm: state => {
      state.formOpen = !state.formOpen;
    },
    setFeedback: (state, action) => {
      state.feedback = action.payload;
    },
    resetForm: state => {
      state.feedback = '';
    },
  },
});

export const { toggleForm, setFeedback, resetForm } = feedbackSlice.actions;

export default feedbackSlice.reducer;
