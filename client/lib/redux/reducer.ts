import { combineReducers } from "@reduxjs/toolkit";

// RTK Query API slices
import { psgcApi } from "@/app/features/form/api/psgcApi";
import { authApi } from "@/app/features/auth/api/authApi";

// States Slices
import { psgcReducer } from "./state/psgcSlice";
import { authReducer } from "./state/authSlice";

const rootReducer = combineReducers({
  user: authReducer,
  psgc: psgcReducer,

  [authApi.reducerPath]: authApi.reducer,
  [psgcApi.reducerPath]: psgcApi.reducer,
});

export const apis = [authApi, psgcApi];
export const apiReducerPaths = apis.map((api) => api.reducerPath);

export default rootReducer;
