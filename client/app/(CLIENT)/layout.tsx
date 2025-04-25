"use client";

import React, { ReactNode } from "react";
import ProtectedRoute from "../ProtectedRoute";
import { useAppSelector } from "@/lib/redux/hooks";
import AuthProvider from "../AuthProvider";

function Layout({ children }: { children: ReactNode }) {
  const authUser = useAppSelector((state) => state.user);
  return (
    <>
      <AuthProvider>
        <ProtectedRoute user={authUser}>{children}</ProtectedRoute>
      </AuthProvider>
    </>
  );
}
export default Layout;
