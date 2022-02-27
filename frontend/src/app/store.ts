import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import { authSlice } from 'features/auth';
import AppSlice from './app.slice';

const rootReducer = combineReducers({
  // ... other reducers
  app: AppSlice.reducer,
  auth: authSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: () => any) => [
    ...getDefaultMiddleware(),
    // ... other middleware
  ],
  preloadedState,
});

export const store = setupStore();
export type AppDispatch = ReturnType<typeof setupStore>['dispatch'];
