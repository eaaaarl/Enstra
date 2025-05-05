/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { signInSchema, signInValues } from "../schema/signin.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignInMutation } from "../api/authApi";
import { useAppDispatch } from "@/lib/redux/hooks";
import { toast } from "sonner";
import { setUser } from "@/lib/redux/states/authSlice";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const form = useForm<signInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const [signIn, { isLoading }] = useSignInMutation();
  const dispatch = useAppDispatch();
  const callSignIn = async (payload: signInValues) => {
    try {
      const res = await signIn(payload).unwrap();
      console.log(res);
      const authuser = res.data;
      dispatch(setUser(authuser));
      toast.success(res.message);
      navigate("/home");
    } catch (error: any) {
      toast.error(
        error?.data?.message || "Failedt to sign in, Please try again"
      );
    }
  };

  const handleSubmit = (payload: signInValues) => {
    callSignIn(payload);
  };

  return {
    form,
    handleSubmit,
    isLoading,
  };
};
