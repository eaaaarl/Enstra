export interface psgcProvinceResonse {
  code: string;
  name: string;
  regionCode: string;
  islandGroupCode: string;
}

export interface psgcCityAndMunicipalityResponse {
  code: string;
  name: string;
  oldName: string;
  isCapital: boolean;
  isCity: boolean;
  isMunicipality: boolean;
  districtCode: string;
  provinceCode: string;
  regionCode: string;
  islandGroupCode: string;
}

export interface psgcBarangayResponse {
  code: string;
  name: string;
  oldName: string;
  subMunicipalityCode: string;
  cityCode: string;
  municipalityCode: string;
  districtCode: string;
  provinceCode: string;
  regionCode: string;
  islandGroupCode: string;
}
