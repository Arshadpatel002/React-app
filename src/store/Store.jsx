// store.js
import { configureStore } from '@reduxjs/toolkit';
import PostSlice from '../slices/PostSlice'; 
import feedbackSlice from '../slices/feedbackSlice'; 

export const store = configureStore({
  reducer: {
    posts: PostSlice,
    feedback: feedbackSlice,
  },
});
