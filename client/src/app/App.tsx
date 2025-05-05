import AuthLayout from "@/components/Layout/AuthLayout";
import HomeLayout from "@/components/Layout/HomeLayout";
import { SignInForm } from "@/features/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useAppSelector } from "@/lib/redux/hooks";
import { appAdminRoutes, appRoutes } from "./routes/appRoutes";
import React from "react";
import AuthLoader from "./AuthLoader";
import { SignUpForm } from "@/features/home";
import AppLayout from "@/components/Layout/AppLayout";

function App() {
  const authUser = useAppSelector((state) => state.auth);
  const authHomePage = "/home";
  return (
    <AuthLoader>
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
          element={
            <ProtectedRoute user={authUser} requiredRole="STUDENT">
              <HomeLayout />
            </ProtectedRoute>
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
            <ProtectedRoute user={authUser} requiredRole="ADMIN">
              <AppLayout />
            </ProtectedRoute>
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
      </Routes>
    </AuthLoader>
  );
}

export default App;
