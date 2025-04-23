"use client";

import { useAppSelector } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const authUser = useAppSelector((state) => state.user);

  useEffect(() => {
    if (authUser.id) {
      router.replace("/dashboard");
    }
  }, [router, authUser]);

  if (authUser.id) return null;
  return <>{children}</>;
}

export default Layout;
