"use client";

import React, { ReactNode } from "react";
import Nav from "../navigation/navbar";

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Nav />
      <main className="container mx-auto py-8 px-4 flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}

export default HomeLayout;
