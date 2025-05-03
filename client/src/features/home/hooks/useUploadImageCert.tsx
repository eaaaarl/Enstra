/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useUploadImageCertificateMutation } from "../api/studentApi";
import { useAppSelector } from "@/lib/redux/hooks";
import { toast } from "sonner";

export const useUploadImageCert = () => {
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (file: File | null) => {
    if (file) {
      setImgFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImgFile(null);
    }
  };

  const user = useAppSelector((state) => state.auth);
  const [updateImageCert, { isLoading }] = useUploadImageCertificateMutation();

  const callSubmitImageCert = async () => {
    try {
      console.log(imgFile);
      if (imgFile && user.id) {
        const res = await updateImageCert({
          userId: user.id,
          file: imgFile,
        }).unwrap();

        console.log(res.imageCertificate);
      }
    } catch (error: any) {
      toast.error(
        error?.data?.message ||
          "Failed to upload and upload medical certificate"
      );
    }
  };

  const handleImageSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    callSubmitImageCert();
  };

  return {
    handleFileChange,
    imgFile,
    previewUrl,
    handleImageSubmit,
    isLoadingSave: isLoading,
  };
};
