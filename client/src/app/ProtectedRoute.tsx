import { UserState } from "@/lib/redux/states/authSlice";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  user: UserState;
  requiredRole: string;
}

function ProtectedRoute({ children, user, requiredRole }: ProtectedRouteProps) {
  if (!user || !user.id) {
    return <Navigate to="/" replace />;
  }

  if (user.role !== requiredRole) {
    return (
      <Navigate to={user.role === "ADMIN" ? "/dashboard" : "/home"} replace />
    );
  }

  return <>{children}</>;
}

export default ProtectedRoute;
