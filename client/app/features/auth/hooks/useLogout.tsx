/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAppDispatch } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";
import { useSignOutMutation } from "../api/authApi";
import { toast } from "sonner";
import { clearUser } from "@/lib/redux/state/authSlice";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [signOut] = useSignOutMutation();
  const callSignOut = async () => {
    try {
      const res = await signOut().unwrap();
      dispatch(clearUser());

      router.push("/signin");
      toast.success(res.message);
    } catch (error: any) {
      console.error(error);
      toast.error(
        error?.data?.message || "Failed to sign out, please try again."
      );
    }
  };

  const handleSubmit = () => {
    callSignOut();
  };

  return {
    handleSubmit,
  };
};
