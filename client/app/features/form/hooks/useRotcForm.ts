import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { studentPayload, studentSchema } from "../schema/students.schema";
import { useState } from "react";

export const useRotcForm = () => {
  const form = useForm<studentPayload>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      medical_certificate: undefined, // Initialize as undefined for file input
      blood_type: "",
      city: "",
      complexion: "",
      course: "",
      date_birth: new Date(), // Now using Date object for consistency with schema
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

  const callSubmitRotcForm = async (payload: studentPayload) => {
    console.log(payload);
  };

  const handleSubmit = (payload: studentPayload) => {
    callSubmitRotcForm(payload);
  };

  const [isLoading] = useState(false);

  return {
    form,
    handleSubmit,
    isLoading,
  };
};
