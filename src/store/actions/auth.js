import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {storage} from '../../../App';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newuuclubs-backend-edb9a496ad39.herokuapp.com/',
    prepareHeaders: headers => {
      const token = storage.getString('token');
      if (token) {
        headers.set('Authorization', `Token ${token}`);
      }
      return headers;
    },
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
    updateUser: mutation({
      query: user => ({
        url: 'api/auth/update/',
        method: 'PUT',
        body: user,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useSignupUserMutation,
  useUpdateUserMutation,
} = authApi;
