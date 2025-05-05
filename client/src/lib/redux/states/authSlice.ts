import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  // initials: ReactNode;
  id: string;
  name: string;
  email: string;
  studentId: string;
  avatarUrl?: string;
  role: string;
}

const initialState: UserState = {
  email: "",
  id: "",
  name: "",
  studentId: "",
  avatarUrl: "",
  role: "",
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
      state.avatarUrl = action.payload.avatarUrl;
      state.role = action.payload.Role;
    },
    clearUser: (state) => {
      state.id = "";
      state.email = "";
      state.name = "";
      state.studentId = "";
      state.avatarUrl = "";
      state.role = "";
    },
  },
});

export const { clearUser, setUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
