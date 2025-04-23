/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema, signUpValues } from "../schema/signup";
import { useSignUpMutation } from "../api/authApi";
import { toast } from "sonner";

export const useSignUpForm = () => {
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

  const callSignUp = async (payload: signUpValues) => {
    try {
      const res = await signUp(payload).unwrap();
      toast.success(res.message);

      form.reset();
    } catch (error: any) {
      toast.error(
        error?.data?.message || "Failed to create an account. please try again"
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
