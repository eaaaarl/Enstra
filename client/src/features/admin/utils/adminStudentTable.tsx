import { createColumnHelper } from "@tanstack/react-table";
import { Student } from "../api/admin.interface";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

interface adminStudentColumnsProps {
  onDelete: (student: Student) => void;
  onEdit: (student: Student) => void;
}

const columnHelper = createColumnHelper<Student>();

export const adminStudentColumns = ({
  onDelete,
  onEdit,
}: adminStudentColumnsProps) => {
  return [
    columnHelper.accessor("student_id", {
      header: () => "Student Id",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor(
      (row) => {
        return [row.firstname, row.middlename, row.lastname]
          .filter((name) => name?.trim())
          .join(" ");
      },
      {
        id: "fullName",
        header: "Full Name",
        cell: (info) => info.getValue(),
      }
    ),
    columnHelper.accessor("email", {
      header: () => "Email",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Programs", {
      header: () => "Program",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("school_year", {
      header: () => "Year",
      cell: (info) => info.getValue(),
    }),

    columnHelper.display({
      id: "actions",
      header: () => "Actions",
      cell: ({ row }) => {
        const student = row.original;
        return (
          <div className="flex gap-2">
            <Button
              variant="destructive"
              size="sm"
              onClick={() => onDelete(student)}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </Button>

            <Button size="sm" onClick={() => onEdit(student)}>
              <Pencil className="h-4 w-4 mr-1" />
              Edit
            </Button>
          </div>
        );
      },
    }),
  ];
};
