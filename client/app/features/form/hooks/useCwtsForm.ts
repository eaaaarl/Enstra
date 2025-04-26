/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAppSelector } from "@/lib/redux/hooks";
import { studentPayload, studentSchema } from "../schema/cwts.schema";
import { useCreateStudentCwtsMutation } from "../api/studentApi";
import { toast } from "sonner";

export const useCwtsForm = () => {
  const form = useForm({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      blood_type: "",
      city: "",
      complexion: "",
      course: "",
      date_birth: "",
      department: "",
      email: "",
      emergency_address: "",
      emergency_name: "",
      emergency_phonenumber: "",
      emergency_relationship: "",
      fathers_name: "",
      fathers_occupation: "",
      firstname: "",
      gender: undefined,
      grade: "",
      height: "",
      lastname: "",
      middlename: "",
      mothers_name: "",
      mothers_occupation: "",
      phone_number: "",
      place_birth: "",
      postal_code: "",
      religion: "",
      school: "",
      state_province: "",
      street_address: "",
      student_id: "",
      semester: "",
      remarks: "",
      school_year: "",
      suffix: "",
      weight: "",
    },
  });

  const authUser = useAppSelector((state) => state.user);
  useEffect(() => {
    if (authUser) {
      form.setValue("student_id", authUser.studentId as string);
    }
  }, [authUser, form]);

  const [createStudentCwts, { isLoading }] = useCreateStudentCwtsMutation();

  const callSubmitCwtsForm = async (payload: studentPayload) => {
    try {
      const res = await createStudentCwts(payload).unwrap();
      console.log("res:", res);
      form.reset();
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to create, please try again");
    }
  };

  const handleSubmit = (payload: studentPayload) => {
    callSubmitCwtsForm(payload);
  };

  return {
    form,
    handleSubmit,
    isLoading,
  };
};
