"use client";

import React, { ReactNode } from "react";
import ProtectedRoute from "../ProtectedRoute";
import { useAppSelector } from "@/lib/redux/hooks";

function Layout({ children }: { children: ReactNode }) {
  const authUser = useAppSelector((state) => state.user);
  return (
    <>
      <ProtectedRoute user={authUser}>{children}</ProtectedRoute>
    </>
  );
}
export default Layout;
