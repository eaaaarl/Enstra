import FormsPage from "@/components/Pages/Home/FormsPage";
import HomePage from "@/components/Pages/Home/HomePage";

import type React from "react";

export const appRoutes = [
  { path: "/home", element: HomePage as React.ComponentType },
  { path: "/forms/:program", element: FormsPage as React.ComponentType },
];
