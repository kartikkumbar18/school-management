import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { AddUser } from "./Adduser";
import { EditUser } from "./EditUser";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../RTK/Store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { fetchUsers } from "../RTK/Slice/AddUserSlice";
import { deleteUserThunk } from "../RTK/Slice/DeleteUserSlice";

import { MdEdit, MdDelete } from "react-icons/md";

const USERS_PER_PAGE = 10;
const NAVBAR_HEIGHT = "h-[112px]";
const NAVBAR_OFFSET = "top-[112px]";

interface UserRow {
  id: string | number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  isStaff: boolean;
  status: "Active" | "Inactive";
}

const getInitials = (name: string) =>
  name ? name.charAt(0).toUpperCase() : "?";

export const ListingUser: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserRow | null>(null);

  /* ================= AUTH + FETCH ================= */
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) navigate("/login");
    else dispatch(fetchUsers());
  }, [dispatch, navigate]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  /* ================= MAP USERS ================= */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedUsers: UserRow[] = users.map((u: any) => ({
    id: u.id,
    username: u.username,
    firstName: u.first_name,
    lastName: u.last_name,
    email: u.email,
    isStaff: u.is_staff,
    status: u.is_active ? "Active" : "Inactive",
  }));

  /* ================= FILTER + PAGINATION ================= */
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

  /* ================= DELETE ================= */
  const handleDelete = (id: string | number) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    dispatch(deleteUserThunk(id))
      .unwrap()
      .then(() => {
        toast.success("User deleted successfully");
        dispatch(fetchUsers());
      })
      .catch((err) => toast.error(err));
  };

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
        {/* ===== TITLE CARD ===== */}
        <div className="mb-6 rounded-xl bg-gradient-to-r from-black to-yellow-600 p-6 text-white shadow-lg">
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-sm text-yellow-200">
            Manage students, teachers & staff efficiently
          </p>
        </div>

        {/* ===== SEARCH + ADD ===== */}
        <div className="mb-6 flex flex-col md:flex-row justify-between gap-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full md:w-1/2 rounded-lg border px-4 py-3"
          />

          <button
            onClick={() => setOpenAddUser(true)}
            className="rounded-lg bg-gradient-to-r from-black to-yellow-600 px-6 py-3 text-white font-semibold shadow hover:scale-105 transition"
          >
            + Add User
          </button>
        </div>

        <AddUser isOpen={openAddUser} onClose={() => setOpenAddUser(false)} />

        {openEditUser && selectedUser && (
          <EditUser
            isOpen={openEditUser}
            user={selectedUser}
            onClose={() => setOpenEditUser(false)}
          />
        )}

        {loading && (
          <div className="text-center py-6 font-semibold">
            Loading users...
          </div>
        )}

        {/* ===== TABLE ===== */}
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
                <tr key={u.id} className="border-t hover:bg-yellow-50">
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

                  <td className="px-4 py-3">{u.email}</td>

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

                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => {
                          setSelectedUser(u);
                          setOpenEditUser(true);
                        }}
                        className="text-blue-600 hover:scale-110"
                      >
                        <MdEdit size={20} />
                      </button>

                      <button
                        onClick={() => handleDelete(u.id)}
                        className="text-red-600 hover:scale-110"
                      >
                        <MdDelete size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {!loading && visibleUsers.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ===== PAGINATION ===== */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-2">
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

export default ListingUser;
