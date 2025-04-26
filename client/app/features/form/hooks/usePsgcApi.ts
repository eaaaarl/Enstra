"use client";

import { useGetProvinceQuery } from "../api/psgcApi";

export const usePsgcApi = () => {
  const { data: provinceData, isLoading: isLoadingProvince } =
    useGetProvinceQuery();

  return {
    provinceData,
    isLoadingProvince,
  };
};
