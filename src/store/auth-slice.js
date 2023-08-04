import {createSlice} from '@reduxjs/toolkit';
import {authApi} from './actions/auth';

const initialState = {
  isAuth: false,
  token: undefined,
  username: undefined,
  email: undefined,
  loading: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.loginUser.matchPending,
      (state, action) => {
        state.loading = true;
        console.log('pending');
      },
    );
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, action) => {
        console.log('login success');
      },
    );
    builder.addMatcher(
      authApi.endpoints.loginUser.matchRejected,
      (state, action) => {
        console.log('login fail');
      },
    );
  },
});

export default authSlice.reducer;
