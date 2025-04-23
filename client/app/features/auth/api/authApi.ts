import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  SignInPayload,
  SignInResponse,
  SignUpPayload,
  SignUpResponse,
} from "./api.interface";

const BASE_URL = "http://localhost:3001/api";

const customBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL + "/auth",
  credentials: "include",
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customBaseQuery,
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
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation } =
  authApi;
