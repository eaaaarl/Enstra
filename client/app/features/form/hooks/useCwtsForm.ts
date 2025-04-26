import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cwtsPayload, cwtsSchema } from "../schema/cwts.schema";

export const useCwtsForm = () => {
  const form = useForm({
    resolver: zodResolver(cwtsSchema),
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

  const callSubmitCwtsForm = (payload: cwtsPayload) => {
    console.log("Submitted CWTS Form Data:", payload);
    // Add your API call or form submission logic here
  };

  const handleSubmit = (payload: cwtsPayload) => {
    callSubmitCwtsForm(payload);
  };

  return {
    form,
    handleSubmit,
  };
};
