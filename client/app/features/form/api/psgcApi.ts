import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  psgcBarangayResponse,
  psgcCityAndMunicipalityResponse,
  psgcProvinceResonse,
} from "./api.interface";

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
    getCityAndMunicipality: builder.query<
      psgcCityAndMunicipalityResponse[],
      string
    >({
      query: (provinceCode) => ({
        url: `provinces/${provinceCode}/cities-municipalities`,
        method: "GET",
      }),
    }),
    getBarangays: builder.query<psgcBarangayResponse[], string>({
      query: (cityCode) => ({
        url: `municipalities/${cityCode}/barangays`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetProvinceQuery,
  useGetCityAndMunicipalityQuery,
  useGetBarangaysQuery,
} = psgcApi;
