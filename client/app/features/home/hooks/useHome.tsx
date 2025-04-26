import { useRouter } from "next/navigation";
import { useState } from "react";

export const useHome = () => {
  const router = useRouter();
  const [selectedProgram, setSelectedProgram] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProgram) {
      router.push(`/${selectedProgram.toLowerCase()}`);
    }
  };

  const handleLogout = () => {
    router.push("/login");
  };

  return {
    handleSubmit,
    handleLogout,

    selectedProgram,
    setSelectedProgram,
    isSubmitted,
    setIsSubmitted,
  };
};
