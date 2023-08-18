import {baseApi} from './auth';

export const coursesApi = baseApi.injectEndpoints({
  endpoints: ({mutation}) => ({
    getCourses: mutation({
      query: () => ({
        url: '/api/courses/',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetCoursesMutation} = coursesApi;
