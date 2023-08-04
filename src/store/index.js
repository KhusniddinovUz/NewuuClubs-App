import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import {baseApi} from './actions/auth';
import {setupListeners} from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export default store;
