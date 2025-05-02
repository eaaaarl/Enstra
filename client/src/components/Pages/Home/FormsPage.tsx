import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgramForms } from "@/features/home";
import { AlertCircle } from "lucide-react";
import { useParams } from "react-router-dom";

function FormsPage() {
  const params = useParams<{ program: string }>();
  return (
    <div className="container max-w-5xl mx-auto p-4">
      <Card className="shadow-lg">
        <CardHeader className="bg-slate-50">
          <CardTitle className="text-2xl font-bold text-center text-slate-700">
            {params.program?.toUpperCase()} APPLICATION FORM
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <Alert variant="destructive" className="bg-amber-50 border-amber-200">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Reminders: PLEASE ENTER VALID AND ACCURATE DATA.
            </AlertDescription>
          </Alert>
          <ProgramForms />
        </CardContent>
      </Card>
    </div>
  );
}

export default FormsPage;
