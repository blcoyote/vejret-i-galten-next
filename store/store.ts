import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { appConfigApi } from '../services/appConfiguration';

export const store = configureStore({
  reducer: { api: api.reducer, appConfigApi: appConfigApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(appConfigApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
