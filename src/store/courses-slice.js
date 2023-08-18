import {createSlice} from '@reduxjs/toolkit';
import {coursesApi} from './actions/courses';
const initialState = {
  loading: false,
  courses: [],
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState: initialState,
  reducers: {
    changeLoading: state => {
      state.loading = !state.loading;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      coursesApi.endpoints.getCourses.matchFulfilled,
      (state, action) => {
        console.log('get courses success');
        state.courses = action.payload;
        state.loading = false;
      },
    );
    builder.addMatcher(
      coursesApi.endpoints.getCourses.matchPending,
      (state, action) => {
        console.log('get courses pending');
        state.loading = true;
      },
    );
    builder.addMatcher(
      coursesApi.endpoints.getCourses.matchRejected,
      (state, action) => {
        console.log('get courses success');
        state.loading = false;
      },
    );
  },
});

export const {changeLoading} = coursesSlice.actions;
export default coursesSlice.reducer;
