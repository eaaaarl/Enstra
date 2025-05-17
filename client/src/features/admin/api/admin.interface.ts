export interface Student {
  id: string;
  student_id: string;
  lastname: string;
  firstname: string;
  middlename: string;
  suffix: string;
  gender: string;
  date_birth: string | Date;
  place_birth: string;
  phone_number: string;
  email: string;
  department: string;
  course: string;
  school: string;
  religion: string;
  weight: string;
  height: string;
  complexion: string;
  blood_type: string;
  street_address: string;
  city: string;
  state_province: string;
  postal_code: string;
  mothers_name: string;
  mothers_occupation: string;
  fathers_name: string;
  fathers_occupation: string;
  emergency_name: string;
  emergency_relationship: string;
  emergency_address: string;
  emergency_phonenumber: string;
  semester: string;
  school_year: string;
  grade: string;
  remarks: string;
  Programs: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  userId: string;
}

export interface StudentListResponse {
  data: Student[];
}

export interface StudentResponse {
  data: Student;
}
