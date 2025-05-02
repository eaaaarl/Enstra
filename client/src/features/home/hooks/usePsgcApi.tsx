import { useGetProvinceQuery } from "../api/psgcApi";

export const usePsgcApi = () => {
  const { data: provinceData, isLoading: isLoadingProvince } =
    useGetProvinceQuery();

  return {
    //Get Province
    provinceData,
    isLoadingProvince,
  };
};
