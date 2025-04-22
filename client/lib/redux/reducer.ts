import { authApi } from "@/app/features/auth/api/authApi";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
});

export const apis = [authApi];
export const apiReducerPaths = apis.map((api) => api.reducerPath);

export default rootReducer;
