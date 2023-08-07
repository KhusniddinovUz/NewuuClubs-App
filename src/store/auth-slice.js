import {createSlice} from '@reduxjs/toolkit';
import {authApi} from './actions/auth';

const initialState = {
  isAuth: false,
  token: undefined,
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  loading: undefined,
  firstTime: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    changeFirstTime: state => {
      state.firstTime = false;
    },
    updateStore: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.firstTime = action.payload.firstTime;
    },
  },
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
        state.loading = false;
        state.isAuth = true;
        state.token = action.payload.token;
        state.email = action.payload.user.email;
        state.firstName = action.payload.user.first_name;
        state.lastName = action.payload.user.last_name;
      },
    );
    builder.addMatcher(
      authApi.endpoints.loginUser.matchRejected,
      (state, action) => {
        console.log('login fail');
        state.loading = false;
        state.isAuth = undefined;
        state.token = undefined;
        state.email = undefined;
        state.firstName = undefined;
        state.lastName = undefined;
      },
    );
    builder.addMatcher(
      authApi.endpoints.signupUser.matchPending,
      (state, action) => {
        state.loading = true;
        console.log('pending');
      },
    );
    builder.addMatcher(
      authApi.endpoints.signupUser.matchFulfilled,
      (state, action) => {
        console.log('signupUser success');
        state.loading = false;
        state.isAuth = true;
        state.token = action.payload.token;
        state.email = action.payload.user.email;
        state.firstName = action.payload.user.first_name;
        state.lastName = action.payload.user.last_name;
      },
    );
    builder.addMatcher(
      authApi.endpoints.signupUser.matchRejected,
      (state, action) => {
        console.log('signupUser fail');
        state.loading = false;
        state.isAuth = undefined;
        state.token = undefined;
        state.email = undefined;
        state.firstName = undefined;
        state.lastName = undefined;
      },
    );
  },
});

export const {changeFirstTime, updateStore} = authSlice.actions;
export default authSlice.reducer;
