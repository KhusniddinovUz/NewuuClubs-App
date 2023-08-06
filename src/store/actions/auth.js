import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/',
  }),
  endpoints: () => ({}),
});

export const authApi = baseApi.injectEndpoints({
  endpoints: ({mutation}) => ({
    loginUser: mutation({
      query: ({email, password}) => ({
        url: '/api/auth/login/',
        method: 'POST',
        body: {username: email, password},
      }),
    }),
    signupUser: mutation({
      query: user => ({
        url: 'api/auth/register/',
        method: 'POST',
        body: {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: user.password,
          username: user.email,
        },
      }),
    }),
  }),
});

export const {useLoginUserMutation, useSignupUserMutation} = authApi;
