import {configureStore} from '@reduxjs/toolkit';
import {baseApi} from './actions/auth';
import {setupListeners} from '@reduxjs/toolkit/query';
import authReducer from './auth-slice';
import coursesReducer from './courses-slice';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    courses: coursesReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export default store;
