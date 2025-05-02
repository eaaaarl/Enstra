/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch } from "@/lib/redux/hooks";
import { useSignOutMutation } from "../api/authApi";
import { toast } from "sonner";
import { clearUser } from "@/lib/redux/states/authSlice";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signOut] = useSignOutMutation();
  const callSignOut = async () => {
    try {
      const res = await signOut().unwrap();
      dispatch(clearUser());

      navigate("/");
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
