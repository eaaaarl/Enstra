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

  const authRole = user.role.toLowerCase();
  const adminRoute = `/${authRole}/dashboard`;

  if (user.role !== requiredRole) {
    return (
      <Navigate to={user.role === "ADMIN" ? adminRoute : "/home"} replace />
    );
  }

  return <>{children}</>;
}

export default ProtectedRoute;
