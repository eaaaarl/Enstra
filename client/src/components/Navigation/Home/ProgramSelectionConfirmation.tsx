import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface ProgramSelectionConfirmationProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCancel: () => void;
  selectedProgram: string;
  onSubmit: () => void;
}

function ProgramSelectionConfirmation({
  open,
  onOpenChange,
  onCancel,
  selectedProgram,
  onSubmit,
}: ProgramSelectionConfirmationProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Program Selection</AlertDialogTitle>
          <AlertDialogDescription className="py-4">
            You are about to register for the{" "}
            <span className="font-bold">{selectedProgram}</span> NSTP program.
            Please confirm your selection to proceed with registration.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex gap-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <AlertDialogAction
            type="button"
            onClick={onSubmit}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Confirm Selection
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ProgramSelectionConfirmation;
