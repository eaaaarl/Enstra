import { authApi } from "@/app/features/auth/api/authApi";
import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./state/authSlice";
const rootReducer = combineReducers({
  user: authReducer,

  [authApi.reducerPath]: authApi.reducer,
});

export const apis = [authApi];
export const apiReducerPaths = apis.map((api) => api.reducerPath);

export default rootReducer;
