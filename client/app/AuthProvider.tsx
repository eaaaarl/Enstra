"use client";

import React, { useEffect } from "react";
import { useCheckAuthQuery } from "./features/auth/api/authApi";
import { useAppDispatch } from "@/lib/redux/hooks";
import { clearUser, setUser } from "@/lib/redux/state/authSlice";

interface AuthProviderProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const { data, error } = useCheckAuthQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.data) {
      const { id, email, name, studentId } = data.data;
      dispatch(setUser({ id, email, name, studentId }));
    } else if (error) {
      dispatch(clearUser());
    }
  }, [data, error, dispatch]);

  return <>{children}</>;
}

export default AuthProvider;
