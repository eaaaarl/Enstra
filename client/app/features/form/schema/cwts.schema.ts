import { z } from "zod";

export const cwtsSchema = z.object({
  student_id: z.string().min(1, "Student ID is required"),
  lastname: z.string().min(1, "Last name is required"),
  firstname: z.string().min(1, "First name is required"),
  middlename: z.string().optional(),
  suffix: z.string().optional(),
  gender: z.enum(["Male", "Female", "Other", ""]),
  date_birth: z.string().min(1, "Date of birth is required"), // consider z.coerce.date() if using date input
  place_birth: z.string().min(1, "Place of birth is required"),
  phone_number: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email"),
  department: z.string().min(1, "Department is required"),
  course: z.string().min(1, "Course is required"),
  school: z.string().min(1, "School is required"),
  religion: z.string().optional(),
  weight: z.string().optional(),
  height: z.string().optional(),
  complexion: z.string().optional(),
  blood_type: z.string().optional(),
  street_address: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state_province: z.string().min(1, "State/Province is required"),
  postal_code: z.string().min(1, "Postal code is required"),
  mothers_name: z.string().min(1, "Mother's name is required"),
  mothers_occupation: z.string().optional(),
  fathers_name: z.string().min(1, "Father's name is required"),
  fathers_occupation: z.string().optional(),
  emergency_name: z.string().min(1, "Emergency contact name is required"),
  emergency_relationship: z.string().min(1, "Relationship is required"),
  emergency_address: z.string().min(1, "Emergency address is required"),
  emergency_phonenumber: z
    .string()
    .min(1, "Emergency phone number is required"),
  semester: z.string().min(1, "Semester is required"),
  school_year: z.string().min(1, "School year is required"),
  grade: z.string().optional(),
  remarks: z.string().optional(),
});

export type cwtsPayload = z.infer<typeof cwtsSchema>;
