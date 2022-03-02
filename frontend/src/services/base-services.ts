/* eslint-disable no-console */
import {
  BaseQueryFn, fetchBaseQuery, FetchBaseQueryError, FetchArgs,
} from '@reduxjs/toolkit/query/react';
import type { RootState } from 'app';
import { logout } from 'features/auth';

const baseUrl: string = process.env.REACT_APP_API_URL || 'https://random-data-api.com/api'; // Only for testing

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: async (headers, { getState }) => {
    headers.set('Content-Type', 'application/json');

    const { token } = (getState() as RootState).auth;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithLogout: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error) console.error(result.error);

  if (result.error?.status === 401) {
    api.dispatch(logout());
    return result;
  }

  return result;
};

export default baseQueryWithLogout;
