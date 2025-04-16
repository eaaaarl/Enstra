import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema, signUpValues } from "../schema/signup";

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

  const callSignUp = (payload: signUpValues) => {
    console.log(payload);
  };

  const handleSubmit = (payload: signUpValues) => {
    callSignUp(payload);
  };

  return {
    form,
    handleSubmit,
  };
};
