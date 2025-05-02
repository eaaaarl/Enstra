import { UserState } from "@/lib/redux/states/authSlice";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  user: UserState;
}

function ProtectedRoute({ children, user }: ProtectedRouteProps) {
  if (!user.id) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}

export default ProtectedRoute;
