import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table";
import { useStudentListQuery } from "../api/admin.student.api";
import { useState } from "react";
import { adminStudentColumns } from "../utils/adminStudentTable";

export const useAdminStudentTable = () => {
  const { data: studentList, isLoading, isError } = useStudentListQuery();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data: studentList?.data ?? [],
    columns: adminStudentColumns({
      onDelete: () => {},
      onEdit: () => {},
    }),
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return {
    table,
    isLoading,
    isError,
    globalFilter,
    setGlobalFilter,
    sorting,
  };
};
