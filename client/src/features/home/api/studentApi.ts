import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { studentPayload } from "../schema/student.schema";

const BASE_URL = "http://localhost:3001/api";

const customBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL + "/student",
  credentials: "include",
});

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: customBaseQuery,
  endpoints: (build) => ({
    createStudentCwts: build.mutation<
      { message: string; data: object },
      studentPayload
    >({
      query: (data) => ({
        url: "/create/cwts",
        method: "POST",
        body: data,
      }),
    }),

    uploadImageCertificate: build.mutation<
      { message: string; imageCertificate: string },
      { userId: string; file: File }
    >({
      query: ({ file, userId }) => {
        const formData = new FormData();
        formData.append("imageCert", file);
        return {
          url: `/image-certificate/${userId}`,
          method: "PUT",
          body: formData,
        };
      },
    }),
  }),
});

export const {
  useCreateStudentCwtsMutation,
  useUploadImageCertificateMutation,
} = studentApi;
