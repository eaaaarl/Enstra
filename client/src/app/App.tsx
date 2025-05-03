import AuthLayout from "@/components/Layout/AuthLayout";
import HomeLayout from "@/components/Layout/HomeLayout";
import { SignInForm } from "@/features/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useAppSelector } from "@/lib/redux/hooks";
import { appRoutes } from "./routes/appRoutes";
import React from "react";

function App() {
  const authUser = useAppSelector((state) => state.auth);
  const authHomePage = "/home";

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
      </Route>

      {/* Protected Route */}
      <Route
        element={
          <ProtectedRoute user={authUser}>
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
    </Routes>
  );
}

export default App;
