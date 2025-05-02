import AuthLayout from "@/components/Layout/AuthLayout";
import HomeLayout from "@/components/Layout/HomeLayout";
import { SignInForm } from "@/features/auth";
import HomePage from "@/components/Pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useAppSelector } from "@/lib/redux/hooks";
import CwtsPage from "@/components/Pages/Home/CwtsPage";

function App() {
  const authUser = useAppSelector((state) => state.auth);
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" index element={<SignInForm />} />
      </Route>

      <Route
        element={
          <ProtectedRoute user={authUser}>
            <HomeLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/home" element={<HomePage />} />
        <Route path="/cwts" element={<CwtsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
