import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Storage } from 'utils';

interface AuthSliceState {
  token?: string | null;
  uid?: string | null;
  isAuthenticated: boolean;
}

const { SessionStorage, LocalStorage } = Storage;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: SessionStorage.getValue('token') || null,
    uid: null,
    isAuthenticated: false,
  } as AuthSliceState,
  reducers: {
    setCredentials: (state: AuthSliceState, { payload }: PayloadAction<AuthSliceState>) => ({
      ...state,
      ...payload,
    }) as AuthSliceState,

    logout: (state: AuthSliceState) => {
      state.token = null;
      state.uid = null;
      state.isAuthenticated = false;

      SessionStorage.clearAll();
      LocalStorage.clearAll();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice;
