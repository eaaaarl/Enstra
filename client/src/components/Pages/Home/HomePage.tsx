import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProgramSelectionForm,
  RegistrationActions,
} from "../../Navigation/Home/ProgramSelectionForm";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import ProgramSelectionConfirmation from "../../Navigation/Home/ProgramSelectionConfirmation";
import { useGetStatusRegistrationQuery } from "@/features/home/api/studentApi";
import RegisteredStatusCard from "@/components/Navigation/Home/RegisteredStatusCard";
import { useAppSelector } from "@/lib/redux/hooks";

function HomePage() {
  const authUser = useAppSelector((state) => state.auth);
  const { data } = useGetStatusRegistrationQuery({
    studentId: authUser.studentId,
  });

  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState("");

  const [open, setIsOpen] = useState(false);
  const handleOpenConfirmation = () => {
    if (selectedProgram) {
      setIsOpen(true);
    }
  };

  const handleConfirmation = () => {
    if (selectedProgram) {
      navigate(
        `/${authUser.role.toLowerCase()}/forms/${selectedProgram.toLowerCase()}`
      );
    }
  };

  return (
    <>
      {data?.resource.isRegistered ? (
        <RegisteredStatusCard {...data.resource} />
      ) : (
        <>
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
            <DropdownMenuSeparator />
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
        </>
      )}
    </>
  );
}

export default HomePage;
