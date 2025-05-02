import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CheckAuthResponse,
  SignInPayload,
  SignInResponse,
  SignUpPayload,
  SignUpResponse,
} from "./authApi.interface";
/* import { toast } from "sonner"; */

const BASE_URL = "http://localhost:3001/api";

const customBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL + "/auth",
  credentials: "include",
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: async (args, api, extraOptions) => {
    const result = await customBaseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
      console.log("401 Error - Token expired or invalid:", result.error);

      // toast.error("Session expired. Please log in again.");
      return { error: result.error };
    }
    return result;
  },
  endpoints: (build) => ({
    signUp: build.mutation<SignUpResponse, SignUpPayload>({
      query: (payload) => ({
        url: "/signup",
        method: "POST",
        body: payload,
      }),
    }),
    signIn: build.mutation<SignInResponse, SignInPayload>({
      query: (payload) => ({
        url: "/signin",
        method: "POST",
        body: payload,
      }),
    }),
    signOut: build.mutation<{ message: string }, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    checkAuth: build.query<CheckAuthResponse, void>({
      query: () => ({
        url: "/me",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useSignOutMutation,
  useCheckAuthQuery,
} = authApi;
