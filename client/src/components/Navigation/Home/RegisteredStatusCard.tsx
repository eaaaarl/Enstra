import { BadgeCheck, Calendar, FileText, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegisteredStatusCard({
  program,
  registeredAt,
  status,
}: {
  studentId?: string;
  program: string;
  isRegistered: boolean;
  registeredAt: Date;
  status: string;
}) {
  const formatDate = (dateString: Date) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Card className="w-full max-w-2xl shadow-md border border-green-200 overflow-hidden">
      <CardHeader className="bg-green-50 py-4 flex flex-col items-center gap-2 px-4">
        <div className="bg-green-100 p-2 rounded-full">
          <BadgeCheck className="text-green-600 w-6 h-6" />
        </div>
        <CardTitle className="text-xl font-bold text-center text-green-800">
          Registration Complete
        </CardTitle>
        <p className="text-xs text-green-700 text-center max-w-sm">
          Your NSTP program registration is confirmed and active
        </p>
      </CardHeader>

      <CardContent className="pt-4 px-6 pb-5">
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <FileText className="text-green-600 w-4 h-4 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-slate-500">Program</p>
              <p className="text-sm font-semibold text-slate-800">
                {program == "CWTS"
                  ? "Civic Welfare Training Service (CWTS)"
                  : program == "LTS"
                  ? "Literacy Training Service (LTS)"
                  : program == "ROTC"
                  ? "Reserve Officers' Training Corps (ROTC)"
                  : ""}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <AlertCircle className="text-green-600 w-4 h-4 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-slate-500">Status</p>
              <p className="text-sm font-semibold text-slate-800">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {status}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Calendar className="text-green-600 w-4 h-4 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-slate-500">
                Registered On
              </p>
              <p className="text-sm font-semibold text-slate-800">
                {formatDate(registeredAt)}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-xs text-slate-500 text-center">
            If you need to change your enrolled program, please contact the
            coordinator
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
