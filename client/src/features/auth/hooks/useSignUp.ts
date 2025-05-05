/* eslint-disable @typescript-eslint/no-explicit-any */

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema, signUpValues } from "../schema/signup.schema";
import { useSignUpMutation } from "../api/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "@/lib/redux/hooks";
import { useNavigate } from "react-router-dom";
import { setUser } from "@/lib/redux/states/authSlice";

export const useSignUp = () => {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      confirmPassword: "",
      email: "",
      name: "",
      password: "",
      studentId: "",
    },
  });

  const [signUp, { isLoading }] = useSignUpMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const callSignUp = async (payload: signUpValues) => {
    try {
      const res = await signUp(payload).unwrap();
      const authuser = res.data;
      dispatch(setUser(authuser));
      toast.success(res.message);
      form.reset();
      navigate("/home");
    } catch (error: any) {
      toast.error(
        error?.data?.message || "Failed to sign up, Please try again"
      );
    }
  };

  const handleSubmit = (payload: signUpValues) => {
    callSignUp(payload);
  };

  return {
    form,
    handleSubmit,
    isLoading,
  };
};
