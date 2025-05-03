import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ProgramForms } from "@/features/home";
import { AlertCircle, BookOpen, Shield, Award } from "lucide-react";
import { useParams } from "react-router-dom";

function FormsPage() {
  const params = useParams<{ program: string }>();
  const programName = params.program || "NSTP";

  const programDisplayNames = {
    rotc: "Reserve Officers' Training Corps (ROTC)",
    lts: "Literacy Training Service (LTS)",
    cwts: "Civic Welfare Training Service (CWTS)",
  };

  const displayName =
    programDisplayNames[programName.toLowerCase() as "rotc" | "lts" | "cwts"] ||
    programName.toUpperCase();
  return (
    <div className="container max-w-5xl mx-auto p-6 bg-slate-50 min-h-screen">
      <Card className="shadow-xl border-0">
        <CardHeader className="bg-blue-800 text-white rounded-t-lg py-6">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-3xl font-bold">
                NSTP ENROLLMENT FORM
              </CardTitle>
              <CardDescription className="text-blue-100 mt-2">
                {displayName}
              </CardDescription>
            </div>
            {programName.toLowerCase() === "rotc" && (
              <div className="bg-white text-blue-800 p-2 rounded-full">
                <Shield className="h-6 w-6" />
              </div>
            )}
            {programName.toLowerCase() === "lts" && (
              <div className="bg-white text-blue-800 p-2 rounded-full">
                <BookOpen className="h-6 w-6" />
              </div>
            )}
            {programName.toLowerCase() !== "rotc" &&
              programName.toLowerCase() !== "lts" && (
                <div className="bg-white text-blue-800 p-2 rounded-full">
                  <Award className="h-6 w-6" />
                </div>
              )}
          </div>
        </CardHeader>

        <CardContent className="space-y-8 pt-8 px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-2">
                Program Information
              </h3>
              <p className="text-sm text-slate-600">
                The National Service Training Program (NSTP) is a required
                program for all Filipino college students. You are applying for{" "}
                <span className="font-semibold">{displayName}</span>.
              </p>
            </div>

            <div className="flex-1 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-2">Requirements</h3>
              <p className="text-sm text-slate-600">
                Please prepare your school ID, 2x2 ID picture, and medical
                certificate before proceeding with this application.
              </p>
            </div>
          </div>

          <Alert
            variant="default"
            className="bg-amber-50 border border-amber-200 text-amber-800"
          >
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="font-bold">IMPORTANT REMINDERS</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                <li>
                  Please ensure all information provided is accurate and
                  complete.
                </li>
                <li>
                  Students who falsify information may face disciplinary action.
                </li>
                <li>
                  You must complete at least 54 training hours to receive a
                  passing mark.
                </li>
              </ul>
            </AlertDescription>
          </Alert>
          <Separator />
          <div className="bg-white ">
            <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center uppercase">
              Student Information
            </h3>
            <ProgramForms programs={displayName} />
          </div>
        </CardContent>
      </Card>
      <div className="text-xs text-slate-500 text-center mt-6">
        © {new Date().getFullYear()} University NSTP Office. For inquiries,
        please contact nstp@university.edu
      </div>
    </div>
  );
}

export default FormsPage;
