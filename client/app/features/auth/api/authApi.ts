import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignUpPayload, SignUpResponse } from "./api.interface";

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
  }),
});

export const { useSignUpMutation } = authApi;
