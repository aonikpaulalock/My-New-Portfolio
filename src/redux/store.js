// import { configureStore } from '@reduxjs/toolkit'
// import { baseApi } from './api/baseApi'
// import loginReducer from './features/auth/login/loginSlice'
// import registerReducer from './features/auth/register/registerSlice'

// export const store = configureStore({
//   reducer: {
//     [baseApi.reducerPath]: baseApi.reducer,
//     authReducer: loginReducer,
//     registerReducer:registerReducer,
//     dashboardReducer: baseApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(baseApi.middleware),
// })

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from './api/baseApi'
import authReducer from './features/auth/login/loginSlice'
import registerReducer from './features/auth/register/registerSlice'

const persistsConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistsConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    registerReducer:registerReducer,
    dashboardReducer: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
