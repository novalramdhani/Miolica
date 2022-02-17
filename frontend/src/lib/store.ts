/* eslint-disable import/prefer-default-export */
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { authReducer } from 'features/auth';

const appReducer = combineReducers({
    auth: authReducer,
});

export const store = configureStore({
    reducer: appReducer,
    devTools: process.env.NODE_ENV !== 'production',
});
