import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { AddUser } from "./Adduser";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../RTK/Store";
import { fetchUsers } from "../RTK/Slice/AddUserSlice";

const USERS_PER_PAGE = 10;
const NAVBAR_HEIGHT = "h-[112px]";
const NAVBAR_OFFSET = "top-[112px]";

// Avatar helper
const getInitials = (name: string) =>
  name ? name.charAt(0).toUpperCase() : "?";

export const ListingUser: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading } = useSelector((state: RootState) => state.users);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [openAddUser, setOpenAddUser] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Map backend → frontend
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedUsers = users.map((u: any) => ({
    username: u.username, // used only for key/actions
    firstName: u.first_name,
    lastName: u.last_name,
    email: u.email,
    isStaff: u.is_staff,
    status: u.is_active ? "Active" : "Inactive",
  }));

  // Search filter
  const filteredUsers = mappedUsers.filter(
    (u) =>
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

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className={`fixed top-0 left-0 w-full z-50 ${NAVBAR_HEIGHT}`}>
        <Navbar />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed left-0 ${NAVBAR_OFFSET} h-[calc(100vh-112px)] w-64 z-40`}
      >
        <Sidebar />
      </div>

      {/* Main */}
      <main className="ml-64 pt-[160px] px-6 pb-10">
        {/* Header */}
        <div className="mb-6 rounded-xl bg-gradient-to-r from-black to-yellow-600 p-6 text-white shadow-lg">
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-sm text-yellow-200">
            Manage students, teachers & staff efficiently
          </p>
        </div>

        {/* Search + Add */}
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

          <button
            className="rounded-lg bg-gradient-to-r from-black to-yellow-600 px-6 py-3 font-semibold text-white shadow hover:scale-105 transition"
            onClick={() => setOpenAddUser(true)}
          >
            + Add User
          </button>

          <AddUser
            isOpen={openAddUser}
            onClose={() => setOpenAddUser(false)}
          />
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-6 font-semibold">
            Loading users...
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto rounded-xl bg-white shadow-lg">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Profile</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-center">Staff</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {visibleUsers.map((u) => (
                <tr
                  key={u.username}
                  className="border-t hover:bg-yellow-50 transition"
                >
                  {/* Profile */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">
                        {getInitials(u.firstName)}
                      </div>
                      <span className="font-semibold">
                        {u.firstName} {u.lastName}
                      </span>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="px-4 py-3">{u.email}</td>

                  {/* Staff */}
                  <td className="px-4 py-3 text-center">
                    {u.isStaff ? "Yes" : "No"}
                  </td>

                  {/* Status */}
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

                  {/* Actions */}
                  <td className="px-4 py-3 text-center">
                    <select
                      className="rounded-md border px-2 py-1 text-sm text-yellow-50 bg-gradient-to-r from-black to-yellow-600"
                      onChange={(e) => {
                        if (e.target.value === "update")
                          console.log("Update:", u.username);
                        if (e.target.value === "delete")
                          console.log("Delete:", u.username);
                        e.target.value = "";
                      }}
                    >
                      <option value="">Select</option>
                      <option value="update">Update</option>
                      <option value="delete">Delete</option>
                    </select>
                  </td>
                </tr>
              ))}

              {!loading && visibleUsers.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
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
