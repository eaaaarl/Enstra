import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  Plus,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Example data - replace with your actual data fetching logic
const dummyData = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    studentId: "ST001",
    program: "Computer Science",
    year: "3rd Year",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    studentId: "ST002",
    program: "Business Administration",
    year: "2nd Year",
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert.j@example.com",
    studentId: "ST003",
    program: "Electrical Engineering",
    year: "4th Year",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.d@example.com",
    studentId: "ST004",
    program: "Psychology",
    year: "1st Year",
  },
  {
    id: "5",
    name: "Michael Brown",
    email: "michael.b@example.com",
    studentId: "ST005",
    program: "Medicine",
    year: "5th Year",
  },
];

// Column definitions
const columns = [
  {
    accessorKey: "studentId",
    header: "Student ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "program",
    header: "Program",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <Button variant="outline" size="sm">
          View
        </Button>
        <Button variant="outline" size="sm">
          Edit
        </Button>
      </div>
    ),
  },
];

export default function StudentTable() {
  const [data, setData] = useState(dummyData);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
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

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search students..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button className="flex items-center">
          <Plus className="mr-2 h-4 w-4" /> Add Student
        </Button>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing{" "}
          {table.getState().pagination.pageIndex *
            table.getState().pagination.pageSize +
            1}{" "}
          to{" "}
          {Math.min(
            (table.getState().pagination.pageIndex + 1) *
              table.getState().pagination.pageSize,
            table.getFilteredRowModel().rows.length
          )}{" "}
          of {table.getFilteredRowModel().rows.length} entries
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
