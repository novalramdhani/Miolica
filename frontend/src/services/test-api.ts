import { createApi } from '@reduxjs/toolkit/query/react';
import type { HttpResponse } from 'app';
import baseQuery from './base-services';

export interface ApiResponse {
  id: number;
  uid: string;
  image: string;
  image_jpg: string;
  image_gif: string;
}

export const TestApiServices = createApi({
  reducerPath: 'test',
  baseQuery,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getExampleData: builder.query<HttpResponse<ApiResponse[]>, void>({
      query: () => ({
        url: '/placeholdit/random_placeholdit?size=5',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetExampleDataQuery,
} = TestApiServices;
