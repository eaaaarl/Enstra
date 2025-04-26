"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { useHome } from "@/app/features/home/hooks/useHome";
import HomeLayout from "@/app/features/home/components/layout/HomeLayout";
import {
  ProgramSelectionForm,
  RegistrationActions,
  RegistrationConfirmation,
} from "@/app/features/home/components/ProgramSelectionForm";

function HomePages() {
  const {
    handleSubmit,
    isSubmitted,
    setIsSubmitted,
    setSelectedProgram,
    selectedProgram,
  } = useHome();

  const resetRegistration = () => {
    setIsSubmitted(false);
    setSelectedProgram("");
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
          {!isSubmitted ? (
            <ProgramSelectionForm
              selectedProgram={selectedProgram}
              setSelectedProgram={setSelectedProgram}
              onSubmit={handleSubmit}
            />
          ) : (
            <RegistrationConfirmation selectedProgram={selectedProgram} />
          )}
        </CardContent>

        <Separator />

        <CardFooter className="flex justify-between py-5 px-8">
          <RegistrationActions
            isSubmitted={isSubmitted}
            selectedProgram={selectedProgram}
            onSubmit={handleSubmit}
            onReset={resetRegistration}
          />
        </CardFooter>
      </Card>
    </HomeLayout>
  );
}

export default HomePages;
