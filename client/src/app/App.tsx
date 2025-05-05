import AuthLayout from "@/components/Layout/AuthLayout";
import HomeLayout from "@/components/Layout/HomeLayout";
import { SignInForm } from "@/features/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useAppSelector } from "@/lib/redux/hooks";
import { appRoutes } from "./routes/appRoutes";
import React from "react";
import AuthLoader from "./AuthLoader";
import { SignUpForm } from "@/features/home";
import AppLayout from "@/components/Layout/AppLayout";
import DashboardPage from "@/components/Pages/Admin/DashboardPage";

function App() {
  const authUser = useAppSelector((state) => state.auth);
  const authStudentHomePage = "/home";
  return (
    <AuthLoader>
      <Routes>
        {/*  Public Routes */}
        <Route element={<AuthLayout />}>
          <Route
            path="/"
            index
            element={
              authUser.id ? (
                <Navigate to={authStudentHomePage} />
              ) : (
                <SignInForm />
              )
            }
          />
          <Route
            path="/signup"
            index
            element={
              authUser.id ? (
                <Navigate to={authStudentHomePage} />
              ) : (
                <SignUpForm />
              )
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
          element={
            <ProtectedRoute user={authUser} requiredRole="ADMIN">
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </AuthLoader>
  );
}

export default App;
