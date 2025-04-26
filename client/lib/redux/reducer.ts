import { authApi } from "@/app/features/auth/api/authApi";
import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./state/authSlice";
import { psgcApi } from "@/app/features/form/api/psgcApi";
const rootReducer = combineReducers({
  user: authReducer,

  [authApi.reducerPath]: authApi.reducer,
  [psgcApi.reducerPath]: psgcApi.reducer,
});

export const apis = [authApi, psgcApi];
export const apiReducerPaths = apis.map((api) => api.reducerPath);

export default rootReducer;
