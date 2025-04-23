"use client";

import { UserState } from "@/lib/redux/state/authSlice";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  user: UserState;
}

function ProtectedRoute({ children, user }: ProtectedRouteProps) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      if (!user.id) {
        router.replace("/signin");
      }
    };
    checkAuth();
  }, [router, user]);

  if (!user.id) return null;

  return <>{children}</>;
}

export default ProtectedRoute;
