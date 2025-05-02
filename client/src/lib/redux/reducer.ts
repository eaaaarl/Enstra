import { authApi } from "@/features/auth/api/authApi";
import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./states/authSlice";
import { psgcReducer } from "./states/psgcSlice";
import { psgcApi } from "@/features/home/api/psgcApi";

const rootReducer = combineReducers({
  auth: authReducer,
  psgc: psgcReducer,

  [authApi.reducerPath]: authApi.reducer,
  [psgcApi.reducerPath]: psgcApi.reducer,
});

export const apis = [authApi, psgcApi];
export const apiReducerPaths = apis.map((api) => api.reducerPath);

export default rootReducer;
