import { combineReducers } from "@reduxjs/toolkit";

// RTK Query API slices
import { psgcApi } from "@/app/features/form/api/psgcApi";
import { authApi } from "@/app/features/auth/api/authApi";
import { studentApi } from "@/app/features/form/api/studentApi";

// States Slices
import { psgcReducer } from "./state/psgcSlice";
import { authReducer } from "./state/authSlice";

const rootReducer = combineReducers({
  user: authReducer,
  psgc: psgcReducer,

  [authApi.reducerPath]: authApi.reducer,
  [psgcApi.reducerPath]: psgcApi.reducer,
  [studentApi.reducerPath]: studentApi.reducer,
});

export const apis = [authApi, psgcApi, studentApi];
export const apiReducerPaths = apis.map((api) => api.reducerPath);

export default rootReducer;
