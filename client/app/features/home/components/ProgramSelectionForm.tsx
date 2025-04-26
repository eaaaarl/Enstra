import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProgramOptionProps {
  id: string;
  title: string;
  description: string;
}

export function ProgramOption({ id, title, description }: ProgramOptionProps) {
  return (
    <div className="flex items-start space-x-3 rounded-md border p-5 hover:bg-slate-50 transition-colors">
      <RadioGroupItem value={id} id={id} className="mt-1" />
      <Label
        htmlFor={id}
        className="flex flex-col items-start flex-1 cursor-pointer"
      >
        <div className="font-semibold text-lg">{title}</div>
        <div className="text-slate-600 mt-1">{description}</div>
      </Label>
    </div>
  );
}

const programOptions = [
  {
    id: "CWTS",
    title: "CWTS - Civic Welfare Training Service",
    description:
      "Community service focused on activities contributing to general welfare and betterment of life. Includes community development programs, health services, environmental conservation, and disaster preparedness.",
  },
  {
    id: "ROTC",
    title: "ROTC - Reserve Officer's Training Corps",
    description:
      "Military training to motivate, train, and develop students for national defense. Includes basic military knowledge, leadership skills, and physical training exercises.",
  },
  {
    id: "LTS",
    title: "LTS - Literacy Training Service",
    description:
      "Training students to teach literacy and numeracy skills to school children and others in need. Includes teaching methods, educational materials development, and community outreach programs.",
  },
];

interface ProgramSelectionFormProps {
  selectedProgram: string;
  setSelectedProgram: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ProgramSelectionForm({
  selectedProgram,
  setSelectedProgram,
  onSubmit,
}: ProgramSelectionFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <RadioGroup
        value={selectedProgram}
        onValueChange={setSelectedProgram}
        className="space-y-5"
      >
        {programOptions.map((program) => (
          <ProgramOption
            key={program.id}
            id={program.id}
            title={program.title}
            description={program.description}
          />
        ))}
      </RadioGroup>

      <div className="mt-6">
        <Alert className="bg-blue-50 text-blue-800 border-blue-200 p-4">
          <InfoIcon className="h-5 w-5 mr-2" />
          <AlertDescription>
            Your selection will determine your service requirements for the
            semester. Choose carefully as program changes may be limited. Each
            program has specific attendance and participation requirements.
          </AlertDescription>
        </Alert>
      </div>
    </form>
  );
}

interface RegistrationActionsProps {
  onSubmit: () => void;
  onReset: () => void;
  selectedProgram: boolean;
}

export function RegistrationActions({
  onSubmit,
  onReset,
  selectedProgram,
}: RegistrationActionsProps) {
  return (
    <div className="flex justify-between w-full">
      <Button variant="outline" onClick={onReset} className="px-5">
        Back to Selection
      </Button>
      <Button onClick={onSubmit} disabled={selectedProgram} className="px-6">
        Confirm Registration
      </Button>
    </div>
  );
}
