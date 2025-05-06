// Admin
import DashboardPage from "@/components/Pages/Admin/DashboardPage";
import StudentPage from "@/components/Pages/Admin/StudentPage";

// Students
import FormsPage from "@/components/Pages/Home/FormsPage";
import HomePage from "@/components/Pages/Home/HomePage";

import type React from "react";

export const appRoutes = [
  { path: "dashboard", element: HomePage as React.ComponentType },
  { path: "forms/:program", element: FormsPage as React.ComponentType },
];

export const appAdminRoutes = [
  { path: "dashboard", element: DashboardPage as React.ComponentType },
  { path: "student", element: StudentPage as React.ComponentType },
];
