import { Header } from "@/components/Navigation/Admin";
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

import {
  Activity,
  Users,
  Clock,
  Award,
  Calendar,
  BookOpen,
} from "lucide-react";

// Mock data for NSTP programs (ROTC, CWTS, LTS)
const mockStudentData = [
  { program: "ROTC", enrolled: 423, completed: 389, male: 287, female: 136 },
  { program: "CWTS", enrolled: 512, completed: 475, male: 242, female: 270 },
  { program: "LTS", enrolled: 298, completed: 267, male: 131, female: 167 },
];

const totalEnrolled = mockStudentData.reduce(
  (sum, item) => sum + item.enrolled,
  0
);
const totalCompleted = mockStudentData.reduce(
  (sum, item) => sum + item.completed,
  0
);
const completionRate = Math.round((totalCompleted / totalEnrolled) * 100);

// Attendance data by month
const attendanceData = [
  { name: "Jan", attendance: 97 },
  { name: "Feb", attendance: 95 },
  { name: "Mar", attendance: 93 },
  { name: "Apr", attendance: 91 },
  { name: "May", attendance: 88 },
  { name: "Jun", attendance: 85 },
  { name: "Jul", attendance: 92 },
  { name: "Aug", attendance: 96 },
  { name: "Sep", attendance: 94 },
  { name: "Oct", attendance: 92 },
];

// Service hours by program
const serviceHoursData = [
  { name: "ROTC", hours: 12450 },
  { name: "CWTS", hours: 10890 },
  { name: "LTS", hours: 8320 },
];

// Gender distribution for pie chart
const genderData = [
  {
    name: "Male",
    value: mockStudentData.reduce((sum, item) => sum + item.male, 0),
  },
  {
    name: "Female",
    value: mockStudentData.reduce((sum, item) => sum + item.female, 0),
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
const GENDER_COLORS = ["#0088FE", "#FF8042"];

// Top activities
const topActivities = [
  { name: "Community Clean-up", participants: 523, hours: 1569 },
  { name: "First Aid Training", participants: 478, hours: 1434 },
  { name: "Disaster Preparedness", participants: 412, hours: 1236 },
  { name: "Tree Planting", participants: 389, hours: 1167 },
  { name: "Leadership Workshop", participants: 367, hours: 1101 },
];

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header content="NSTP Programs Management" title="Dashboard" />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {/* Key metrics */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="flex items-center rounded-xl bg-white p-4 shadow-sm">
            <div className="mr-4 rounded-full bg-blue-100 p-3">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Students</p>
              <p className="text-2xl font-bold">{totalEnrolled}</p>
            </div>
          </div>

          <div className="flex items-center rounded-xl bg-white p-4 shadow-sm">
            <div className="mr-4 rounded-full bg-green-100 p-3">
              <Award className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Completion Rate</p>
              <p className="text-2xl font-bold">{completionRate}%</p>
            </div>
          </div>

          <div className="flex items-center rounded-xl bg-white p-4 shadow-sm">
            <div className="mr-4 rounded-full bg-purple-100 p-3">
              <Clock className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Service Hours</p>
              <p className="text-2xl font-bold">
                {serviceHoursData
                  .reduce((sum, item) => sum + item.hours, 0)
                  .toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center rounded-xl bg-white p-4 shadow-sm">
            <div className="mr-4 rounded-full bg-orange-100 p-3">
              <Activity className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Activities</p>
              <p className="text-2xl font-bold">42</p>
            </div>
          </div>
        </div>

        {/* Charts row */}
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {/* Program Distribution */}
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <h3 className="mb-4 text-lg font-medium">Program Distribution</h3>
            {isLoading ? (
              <div className="flex h-64 items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={mockStudentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="program" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="enrolled" name="Enrolled" fill="#0088FE" />
                  <Bar dataKey="completed" name="Completed" fill="#00C49F" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Gender Distribution */}
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <h3 className="mb-4 text-lg font-medium">Gender Distribution</h3>
            {isLoading ? (
              <div className="flex h-64 items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {genderData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={GENDER_COLORS[index % GENDER_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Attendance Trend */}
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <h3 className="mb-4 text-lg font-medium">Attendance Trend</h3>
            {isLoading ? (
              <div className="flex h-64 items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[80, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="attendance"
                    name="Attendance %"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Bottom section - Top Activities */}
        <div className="flex-1 rounded-xl bg-white p-4 shadow-sm md:min-h-min">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-medium">Top Activities</h3>
            <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">
              View All
            </button>
          </div>

          {isLoading ? (
            <div className="flex h-64 items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-2 text-left text-sm font-medium text-gray-500">
                      Activity Name
                    </th>
                    <th className="border-b p-2 text-left text-sm font-medium text-gray-500">
                      Participants
                    </th>
                    <th className="border-b p-2 text-left text-sm font-medium text-gray-500">
                      Service Hours
                    </th>
                    <th className="border-b p-2 text-left text-sm font-medium text-gray-500">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topActivities.map((activity, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border-b p-2 text-sm">{activity.name}</td>
                      <td className="border-b p-2 text-sm">
                        {activity.participants}
                      </td>
                      <td className="border-b p-2 text-sm">{activity.hours}</td>
                      <td className="border-b p-2 text-sm">
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Program summary cards */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {mockStudentData.map((program, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-gray-50 p-4"
              >
                <div className="mb-2 flex items-center">
                  {index === 0 && (
                    <BookOpen className="mr-2 h-5 w-5 text-red-500" />
                  )}
                  {index === 1 && (
                    <Users className="mr-2 h-5 w-5 text-blue-500" />
                  )}
                  {index === 2 && (
                    <Award className="mr-2 h-5 w-5 text-green-500" />
                  )}
                  <h4 className="font-medium">{program.program}</h4>
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Enrolled</p>
                    <p className="font-semibold">{program.enrolled}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Completed</p>
                    <p className="font-semibold">{program.completed}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Completion</p>
                    <p className="font-semibold">
                      {Math.round((program.completed / program.enrolled) * 100)}
                      %
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
