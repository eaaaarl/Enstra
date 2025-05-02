import { createSlice } from "@reduxjs/toolkit";

interface PsgcState {
  selectedProvinceCode: string;
  selectedCityCode: string;
}

const initialState: PsgcState = {
  selectedProvinceCode: "",
  selectedCityCode: "",
};

const psgcSlice = createSlice({
  name: "psgc",
  initialState,
  reducers: {
    setSelectedProvinceCode: (state, action) => {
      state.selectedProvinceCode = action.payload;
    },

    setSelectedCityCode: (state, action) => {
      state.selectedCityCode = action.payload;
    },
  },
});

export const { setSelectedProvinceCode, setSelectedCityCode } =
  psgcSlice.actions;
export const psgcReducer = psgcSlice.reducer;
