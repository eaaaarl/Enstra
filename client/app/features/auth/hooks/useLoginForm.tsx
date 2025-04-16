import { useForm } from "react-hook-form";
import { signInSchema, signInValues } from "../schema/signin";
import { zodResolver } from "@hookform/resolvers/zod";

export const useLoginForm = () => {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const callSignIn = (payload: signInValues) => {
    console.log(payload);
  };

  const handleSubmit = (payload: signInValues) => {
    callSignIn(payload);
  };

  return {
    form,
    handleSubmit,
  };
};
