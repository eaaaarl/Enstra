import { Header } from "@/components/Navigation/Admin";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StudentTable from "@/features/admin/components/AdminStudentTable";

function StudentPage() {
  return (
    <>
      <Header content="Students Management" title="Student" />
      <div className="mx-4">
        <Card>
          <CardHeader>
            <CardTitle>Student List</CardTitle>
          </CardHeader>
          <CardContent>
            <StudentTable />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default StudentPage;
