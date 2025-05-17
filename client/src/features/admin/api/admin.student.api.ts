import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StudentListResponse } from "./admin.interface";

const customBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/api/admin",
  credentials: "include",
});

export const adminStudentApi = createApi({
  reducerPath: "adminStudentApi ",
  baseQuery: async (args, api, extraOptions) => {
    return await customBaseQuery(args, api, extraOptions);
  },
  endpoints: (build) => ({
    studentList: build.query<StudentListResponse, void>({
      query: () => ({
        url: "/students",
        method: "GET",
      }),
    }),
  }),
});

export const { useStudentListQuery } = adminStudentApi;
