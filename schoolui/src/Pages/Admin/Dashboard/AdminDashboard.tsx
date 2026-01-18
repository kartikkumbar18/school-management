import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import { StatsCard } from "./StatsCard";
import { RecentActivities } from "./RecentActivites";
import Sidebar from "../../../Components/Sidebar/Sidebar";


export const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 h-[112px]">
        <Navbar />
      </div>

      {/* Sidebar */}
      <div className="fixed left-0 top-[112px] h-[calc(100vh-112px)] w-64 z-40">
        <Sidebar />
      </div>

      {/* Main */}
      <main className="ml-64 pt-[160px] px-6 pb-10">
        {/* Header */}
        <div className="mb-6 rounded-xl bg-gradient-to-r from-black to-yellow-600 p-6 text-white shadow-lg">
          <h1 className="text-2xl font-bold">School Admin Dashboard</h1>
          <p className="text-yellow-200 text-sm">
            Overview of students, staff, attendance & fees
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard title="Total Students" value="1,245" />
          <StatsCard title="Teachers" value="82" />
          <StatsCard title="Classes" value="38" />
          <StatsCard title="Pending Fees" value="₹4.6L" />
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Attendance */}
          <div className="col-span-2 rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold">
              Today’s Attendance
            </h2>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Present</p>
                <p className="text-2xl font-bold text-green-600">1,180</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Absent</p>
                <p className="text-2xl font-bold text-red-600">65</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Percentage</p>
                <p className="text-2xl font-bold text-yellow-600">94%</p>
              </div>
            </div>
          </div>

          {/* Notices */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold">
              Notices
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="border-l-4 border-yellow-500 pl-3">
                PTM scheduled on Friday
              </li>
              <li className="border-l-4 border-yellow-500 pl-3">
                Fee submission deadline extended
              </li>
              <li className="border-l-4 border-yellow-500 pl-3">
                Sports day next week
              </li>
            </ul>
          </div>
        </div>

        {/* Recent Activities */}
        <RecentActivities />
      </main>
    </div>
  );
};
