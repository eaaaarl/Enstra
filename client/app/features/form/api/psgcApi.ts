import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { psgcProvinceResonse } from "./api.interface";

export const psgcApi = createApi({
  reducerPath: "psgcApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://psgc.gitlab.io/api/",
  }),
  endpoints: (builder) => ({
    getProvince: builder.query<psgcProvinceResonse[], void>({
      query: () => ({
        url: "provinces",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProvinceQuery } = psgcApi;
