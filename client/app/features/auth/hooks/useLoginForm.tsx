/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { signInSchema, signInValues } from "../schema/signin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignInMutation } from "../api/authApi";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setUser } from "@/lib/redux/state/authSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useLoginForm = () => {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [signIn, { isLoading }] = useSignInMutation();

  const callSignIn = async (payload: signInValues) => {
    try {
      const res = await signIn(payload).unwrap();
      const authUser = res.data;
      dispatch(
        setUser({
          id: authUser.id,
          name: authUser.name,
          email: authUser.email,
          studentId: authUser.studentId,
        })
      );

      toast.success(res.message);
      form.reset();
      console.log("Navigating to /home");
      router.push("/home");
    } catch (error: any) {
      toast.error(
        error?.data?.message || "Failed to sign in, pleast try again."
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
