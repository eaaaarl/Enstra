import {
  useCheckAuthQuery,
  useSignOutMutation,
} from "@/features/auth/api/authApi";
import { useAppDispatch } from "@/lib/redux/hooks";
import { clearUser } from "@/lib/redux/states/authSlice";
import { ReactNode, useEffect } from "react";

interface AuthLoaderProps {
  children: ReactNode;
}

function AuthLoader({ children }: AuthLoaderProps) {
  const { data, isLoading, isError } = useCheckAuthQuery();
  const dispatch = useAppDispatch();
  const [signOut] = useSignOutMutation();

  useEffect(() => {
    if (!isLoading && (isError || !data?.data)) {
      dispatch(clearUser());
      signOut().unwrap();
    }
  }, [data, isError, isLoading, dispatch, signOut]);

  if (isLoading) return <div>Loading...</div>;

  return <>{children}</>;
}

export default AuthLoader;
