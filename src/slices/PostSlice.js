// features/posts/postsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    currentPage: 1,
    loading: true,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
  },
});

export const { setPosts, setPage, removePost } = postsSlice.actions;

export const fetchPosts = () => async dispatch => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPosts(response.data));
  } catch (error) {
    console.error(error);
  }
};

export default postsSlice.reducer;
