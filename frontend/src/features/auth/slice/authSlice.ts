import { createSlice } from '@reduxjs/toolkit';
import { AuthStateInterface } from './index';

const initialState: AuthStateInterface = {
    token: null,
    user: null,
    loading: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthToken: (state, { payload }) => {
            state.token = payload;
        },
    },
});

export const { setAuthToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
