import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  name: string;
  email: string;
  studentId: string;
}

const initialState: UserState = {
  email: "",
  id: "",
  name: "",
  studentId: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.studentId = action.payload.studentId;
    },
    clearUser: (state) => {
      state.id = "";
      state.email = "";
      state.name = "";
      state.studentId = "";
    },
  },
});

export const { clearUser, setUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
