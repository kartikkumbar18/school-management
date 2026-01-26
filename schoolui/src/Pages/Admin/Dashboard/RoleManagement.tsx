import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MdEdit, MdDelete } from "react-icons/md";

import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";

import { AppDispatch, RootState } from "../../RTK/Store";
import {
  addRoleThunk,
  deleteRoleThunk,
  fetchRoles,
  updateRoleThunk,
} from "../../RTK/Slice/RoleSlice";

export const RoleManagement: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { roles, loading } = useSelector(
    (state: RootState) => state.roles
  );

  const [roleName, setRoleName] = useState("");
  const [editId, setEditId] = useState<string | number | null>(null);

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  /* ================= ADD / UPDATE ================= */
  const handleSubmit = () => {
    if (!roleName.trim()) {
      toast.warning("Role name is required");
      return;
    }

    const exists = roles.some(
      (r) =>
        r.name.toLowerCase() === roleName.toLowerCase() &&
        r.id !== editId
    );

    if (exists) {
      toast.error("Role already exists");
      return;
    }

    if (editId) {
      dispatch(updateRoleThunk({ id: editId, payload: { name: roleName } }));
      toast.success("Role updated");
      setEditId(null);
    } else {
      dispatch(addRoleThunk({ name: roleName }));
      toast.success("Role added");
    }

    setRoleName("");
  };

  /* ================= DELETE ================= */
  const handleDelete = (id: string | number) => {
    if (!window.confirm("Delete this role?")) return;
    dispatch(deleteRoleThunk(id));
    toast.success("Role deleted");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Sidebar />

      <main className="ml-64 pt-[160px] px-6 pb-10">
        {/* TITLE */}
        <div className="mb-6 rounded-xl bg-gradient-to-r from-black to-yellow-600 p-6 text-white shadow">
          <h1 className="text-2xl font-bold">Role Management</h1>
          <p className="text-sm text-yellow-200">
            Create and manage roles
          </p>
        </div>

        {/* ADD ROLE */}
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Enter role name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            className="w-1/3 rounded-lg border px-4 py-3"
          />

          <button
            onClick={handleSubmit}
            className="rounded-lg bg-gradient-to-r from-black to-yellow-600 px-6 py-3 text-white font-semibold"
          >
            {editId ? "Update Role" : "Add Role"}
          </button>
        </div>

        {/* TABLE */}
        <div className="rounded-xl bg-white shadow">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-center">#</th>
                <th className="px-4 py-3 text-left">Role Name</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {roles.map((role, index) => (
                <tr key={role.id} className="border-t">
                  <td className="px-4 py-3 text-center">{index + 1}</td>
                  <td className="px-4 py-3 font-semibold">{role.name}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => {
                          setEditId(role.id);
                          setRoleName(role.name);
                        }}
                        className="text-blue-600 hover:scale-110"
                      >
                        <MdEdit size={20} />
                      </button>

                      <button
                        onClick={() => handleDelete(role.id)}
                        className="text-red-600 hover:scale-110"
                      >
                        <MdDelete size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {!loading && roles.length === 0 && (
                <tr>
                  <td colSpan={3} className="py-6 text-center text-gray-500">
                    No roles found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};
