"use client";

import React, { useEffect } from "react";
import { useCheckAuthQuery } from "./features/auth/api/authApi";
import { useAppDispatch } from "@/lib/redux/hooks";
import { clearUser, setUser } from "@/lib/redux/state/authSlice";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data, error, isLoading } = useCheckAuthQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data?.data) {
      dispatch(setUser(data.data));
    } else if (error) {
      dispatch(clearUser());
    }
  }, [dispatch, data, error]);

  return <>{isLoading ? null : children}</>;
}

export default AuthProvider;
