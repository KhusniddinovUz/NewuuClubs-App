import {createSlice} from '@reduxjs/toolkit';
import {authApi} from './actions/auth';

const initialState = {
  isAuth: false,
  id: undefined,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  groupNumber: undefined,
  studentId: undefined,
  studentYear: undefined,
  token: undefined,
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
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.groupNumber = action.payload.groupNumber;
      state.studentId = action.payload.studentId;
      state.studentYear = action.payload.studentYear;
      state.token = action.payload.token;
      state.firstTime = action.payload.firstTime;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.loginUser.matchPending,
      (state, action) => {
        state.loading = true;
        console.log('login pending');
      },
    );
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, action) => {
        console.log('login success');
        console.log(action.payload);
        state.isAuth = true;
        state.id = action.payload.user.id;
        state.firstName = action.payload.user.first_name;
        state.lastName = action.payload.user.last_name;
        state.email = action.payload.user.email;
        state.groupNumber = action.payload.user.group_number;
        state.studentId = action.payload.user.student_id;
        state.studentYear = action.payload.user.student_year;
        state.token = action.payload.token;
        state.loading = false;
      },
    );
    builder.addMatcher(
      authApi.endpoints.loginUser.matchRejected,
      (state, action) => {
        console.log('login fail');
        state.isAuth = undefined;
        state.id = undefined;
        state.firstName = undefined;
        state.lastName = undefined;
        state.email = undefined;
        state.groupNumber = undefined;
        state.studentId = undefined;
        state.studentYear = undefined;
        state.token = undefined;
        state.loading = false;
      },
    );
    builder.addMatcher(
      authApi.endpoints.signupUser.matchPending,
      (state, action) => {
        console.log('pending');
        state.loading = true;
      },
    );
    builder.addMatcher(
      authApi.endpoints.signupUser.matchFulfilled,
      (state, action) => {
        console.log('signupUser success');
        state.isAuth = true;
        state.id = action.payload.user.id;
        state.firstName = action.payload.user.first_name;
        state.lastName = action.payload.user.last_name;
        state.email = action.payload.user.email;
        state.groupNumber = action.payload.user.group_number;
        state.studentId = action.payload.user.student_id;
        state.studentYear = action.payload.user.student_year;
        state.token = action.payload.token;
        state.loading = false;
      },
    );
    builder.addMatcher(
      authApi.endpoints.signupUser.matchRejected,
      (state, action) => {
        console.log('signupUser fail');
        state.isAuth = undefined;
        state.id = undefined;
        state.firstName = undefined;
        state.lastName = undefined;
        state.email = undefined;
        state.groupNumber = undefined;
        state.studentId = undefined;
        state.studentYear = undefined;
        state.token = undefined;
        state.loading = false;
      },
    );
  },
});

export const {changeFirstTime, updateStore} = authSlice.actions;
export default authSlice.reducer;
