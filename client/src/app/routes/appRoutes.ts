import CwtsPage from "@/components/Pages/Home/CwtsPage";
import HomePage from "@/components/Pages/Home/HomePage";
import type React from "react";

export const appRoutes = [
  { path: "/home", element: HomePage as React.ComponentType },
  { path: "/cwts", element: CwtsPage as React.ComponentType },
];
