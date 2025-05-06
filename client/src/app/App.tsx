import AuthLayout from "@/components/Layout/AuthLayout";
import HomeLayout from "@/components/Layout/HomeLayout";
import { SignInForm } from "@/features/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useAppSelector } from "@/lib/redux/hooks";
import { appAdminRoutes, appRoutes } from "./routes/appRoutes";
import React from "react";
import { SignUpForm } from "@/features/home";
import AppLayout from "@/components/Layout/AppLayout";
import PageNotFound from "./PageNotFound";
import AuthStudentLoader from "./AuthStudentLoader";
import AuthAdminLoader from "./AuthAdminLoader";

function App() {
  const authUser = useAppSelector((state) => state.auth);
  const authRole = authUser.role.toLowerCase();
  const authHomePage = `/${authRole}/dashboard`;
  return (
    <Routes>
      {/*  Public Routes */}
      <Route element={<AuthLayout />}>
        <Route
          path="/"
          index
          element={
            authUser.id ? <Navigate to={authHomePage} /> : <SignInForm />
          }
        />
        <Route
          path="/signup"
          index
          element={
            authUser.id ? <Navigate to={authHomePage} /> : <SignUpForm />
          }
        />
      </Route>

      {/* Student Route */}
      <Route
        path="/student"
        element={
          <AuthStudentLoader>
            <ProtectedRoute user={authUser} requiredRole="STUDENT">
              <HomeLayout />
            </ProtectedRoute>
          </AuthStudentLoader>
        }
      >
        {appRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={React.createElement(route.element)}
          />
        ))}
      </Route>

      {/* Admin Route */}
      <Route
        path="/admin"
        element={
          <AuthAdminLoader>
            <ProtectedRoute user={authUser} requiredRole="ADMIN">
              <AppLayout />
            </ProtectedRoute>
          </AuthAdminLoader>
        }
      >
        {appAdminRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={React.createElement(route.element)}
          />
        ))}
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
