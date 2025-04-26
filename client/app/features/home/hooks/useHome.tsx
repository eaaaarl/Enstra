import { useRouter } from "next/navigation";
import { useState } from "react";

export const useHome = () => {
  const router = useRouter();
  const [selectedProgram, setSelectedProgram] = useState("");
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);

  const handleShowConfirmation = () => {
    setIsOpenConfirmation(true);
  };

  const handleConfirmationSubmit = () => {
    if (selectedProgram) {
      router.push(`/${selectedProgram.toLowerCase()}`);
    }
  };

  return {
    // States
    selectedProgram,
    setSelectedProgram,
    isOpenConfirmation,
    setIsOpenConfirmation,

    // Handler
    handleShowConfirmation,
    handleConfirmationSubmit,
  };
};
