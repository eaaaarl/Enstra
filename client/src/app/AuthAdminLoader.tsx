import {
  useCheckAdminAuthQuery,
  useSignOutMutation,
} from "@/features/auth/api/authApi";
import { useAppDispatch } from "@/lib/redux/hooks";
import { clearUser } from "@/lib/redux/states/authSlice";
import { ReactNode, useEffect } from "react";

interface AuthLoaderProps {
  children: ReactNode;
}

function AuthAdminLoader({ children }: AuthLoaderProps) {
  const { data, isLoading, isError } = useCheckAdminAuthQuery();
  const dispatch = useAppDispatch();
  const [signOut] = useSignOutMutation();

  useEffect(() => {
    if (!isLoading && (isError || !data?.data)) {
      dispatch(clearUser());
      signOut().unwrap();
    }
  }, [data, isError, isLoading, dispatch, signOut]);

  if (isLoading) return null;

  return <>{children}</>;
}

export default AuthAdminLoader;
