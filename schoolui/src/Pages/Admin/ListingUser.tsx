import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { User, usersData } from "../UserData";
import { AddUser } from "./Adduser";

const USERS_PER_PAGE = 10;

// Adjust these heights based on your Navbar height
const NAVBAR_HEIGHT = "h-[112px]"; // top info + main navbar
const NAVBAR_OFFSET = "top-[112px]";

export const ListingUser: React.FC = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [openAddUser, setOpenAddUser] = useState(false);

  // Search filter
  const filteredUsers = usersData.filter(
    (u: User) =>
      u.firstName.toLowerCase().includes(search.toLowerCase()) ||
      u.lastName.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const startIndex = (page - 1) * USERS_PER_PAGE;
  const visibleUsers = filteredUsers.slice(
    startIndex,
    startIndex + USERS_PER_PAGE
  );

  const handleAdduser = () => {
    setOpenAddUser(true);
  };
  

  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* ================= NAVBAR ================= */}
      <div className={`fixed top-0 left-0 w-full z-50 ${NAVBAR_HEIGHT}`}>
        <Navbar />
      </div>

      {/* ================= SIDEBAR ================= */}
      <div
        className={`fixed left-0 ${NAVBAR_OFFSET} h-[calc(100vh-112px)] w-64 z-40`}
      >
        <Sidebar />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="ml-64 pt-[160px] px-6 pb-10">
        {/* Page Header */}
        <div className="mb-6 rounded-xl bg-gradient-to-r from-black to-yellow-600 p-6 text-white shadow-lg">
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-sm text-yellow-200">
            Manage students, teachers & staff efficiently
          </p>
        </div>

        {/* Search + Add Button */}
        <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full md:w-1/2 rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <button className="rounded-lg bg-gradient-to-r from-black to-yellow-600 px-6 py-3 font-semibold text-white shadow hover:scale-105 transition" 
          onClick={handleAdduser}>
            + Add User
          </button>
          <AddUser
    isOpen={openAddUser}
    onClose={() => setOpenAddUser(false)}
  />
        </div>

        {/* ================= USERS TABLE ================= */}
        <div className="overflow-x-auto rounded-xl bg-white shadow-lg">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Profile</th>
                <th className="px-4 py-3 text-left">First Name</th>
                <th className="px-4 py-3 text-left">Last Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-center">Staff</th>
                <th className="px-4 py-3 text-center">Status</th>
              </tr>
            </thead>

            <tbody>
              {visibleUsers.map((u) => (
                <tr
                  key={u.id}
                  className="border-t hover:bg-yellow-50 transition"
                >
                  <td className="px-4 py-3">
                    <img
                      src={u.avatar}
                      alt={u.firstName}
                      className="h-10 w-10 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-3">{u.firstName}</td>
                  <td className="px-4 py-3">{u.lastName}</td>
                  <td className="px-4 py-3">{u.email}</td>
                  <td className="px-4 py-3">{u.phone}</td>
                  <td className="px-4 py-3 font-semibold">{u.role}</td>
                  <td className="px-4 py-3 text-center">
                    {u.isStaff ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        u.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}

              {visibleUsers.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ================= PAGINATION ================= */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center flex-wrap gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 rounded-md font-semibold transition ${
                  page === i + 1
                    ? "bg-gradient-to-r from-black to-yellow-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
