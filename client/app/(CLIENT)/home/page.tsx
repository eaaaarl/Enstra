"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import HomeLayout from "@/app/features/home/components/layout/HomeLayout";
import {
  ProgramSelectionForm,
  RegistrationActions,
} from "@/app/features/home/components/ProgramSelectionForm";
import ProgramSelectionConfirmation from "@/app/features/home/components/ProgramSelectionConfirmation";
import { useState } from "react";
import { useRouter } from "next/navigation";

function HomePages() {
  const router = useRouter();
  const [selectedProgram, setSelectedProgram] = useState("");

  const [open, setIsOpen] = useState(false);
  const handleOpenConfirmation = () => {
    if (selectedProgram) {
      setIsOpen(true);
    }
  };

  const handleConfirmation = () => {
    if (selectedProgram) {
      router.push(`/${selectedProgram.toLowerCase()}`);
    }
  };

  return (
    <HomeLayout>
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader className="bg-slate-100 rounded-t-lg py-5">
          <CardTitle className="text-2xl font-bold text-center text-slate-800">
            Student Program Registration
          </CardTitle>
          <CardDescription className="text-lg text-center text-slate-600 mt-1">
            Please select one of the following programs
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 px-8">
          <ProgramSelectionForm
            selectedProgram={selectedProgram}
            setSelectedProgram={setSelectedProgram}
            onSubmit={handleOpenConfirmation}
          />
        </CardContent>
        <Separator />
        <CardFooter className="flex justify-between py-5 px-8">
          <RegistrationActions
            selectedProgram={!selectedProgram}
            onSubmit={handleOpenConfirmation}
          />
        </CardFooter>
      </Card>

      <ProgramSelectionConfirmation
        selectedProgram={selectedProgram}
        onOpenChange={handleOpenConfirmation}
        open={open}
        onCancel={() => {
          setSelectedProgram("");
          setIsOpen(false);
        }}
        onSubmit={handleConfirmation}
      />
    </HomeLayout>
  );
}

export default HomePages;
