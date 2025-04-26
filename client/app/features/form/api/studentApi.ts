import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { studentPayload } from "../schema/cwts.schema";

const BASE_URL = "http://localhost:3001/api";

const customBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL + "/student",
  credentials: "include",
});

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: customBaseQuery,
  endpoints: (build) => ({
    createStudentCwts: build.mutation<
      { message: string; data: object },
      studentPayload
    >({
      query: (data) => ({
        url: "/create/cwts",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateStudentCwtsMutation } = studentApi;
