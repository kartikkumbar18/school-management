import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../RTK/Store";

import {
  fetchRoleMappings,
  addRoleMappingThunk,
  deleteRoleMappingThunk,
} from "../../RTK/Slice/RoleMappingSlice";

import { fetchUsers } from "../../RTK/Slice/AddUserSlice";
import { fetchRoles } from "../../RTK/Slice/RoleSlice";

import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

/* ================= TYPES ================= */

interface MappingGroup {
  id: number;
  name: string;
}

interface Mapping {
  id: number; // user id
  username: string;
  groups: MappingGroup[];
}

export const RoleMapping: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { mappings, loading } = useSelector(
    (state: RootState) => state.roleMapping
  );
  const { users } = useSelector((state: RootState) => state.users);
  const { roles } = useSelector((state: RootState) => state.roles);

  const [userId, setUserId] = useState<number | "">("");
  const [roleIds, setRoleIds] = useState<number[]>([]);
  const [isEditMode, setIsEditMode] = useState(false);

  /* ================= FETCH DATA ================= */

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchRoles());
    dispatch(fetchRoleMappings());
  }, [dispatch]);

  /* ================= ADD / UPDATE ================= */

  const handleMapRole = async () => {
    if (!userId || roleIds.length === 0) {
      toast.warning("Please select user and role");
      return;
    }
  
    try {
      await dispatch(
        addRoleMappingThunk({
          user_id: userId,
          group_ids: roleIds,
        })
      ).unwrap();
  
      toast.success(isEditMode ? "Mapping updated" : "Role mapped");
  
      resetForm();                 // ✅ RESET FIRST
      dispatch(fetchRoleMappings()); // ✅ THEN RELOAD DATA
    } catch (err) {
      toast.error(String(err));
    }
  };
  

  /* ================= EDIT ================= */

  const handleEdit = (mapping: Mapping) => {
    setUserId(mapping.id);
    setRoleIds(mapping.groups.map((g) => g.id));
    setIsEditMode(true);
  };

  /* ================= DELETE ================= */

  const handleDelete = (userId: number) => {
    if (!window.confirm("Remove all roles for this user?")) return;

    dispatch(deleteRoleMappingThunk(userId))
      .unwrap()
      .then(() => toast.success("Role mapping removed"))
      .catch((err) => toast.error(err));
  };

  /* ================= RESET ================= */

  const resetForm = () => {
    setUserId("");
    setRoleIds([]);
    setIsEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Sidebar />

      <main className="ml-64 pt-[160px] px-6 pb-10">
        {/* TITLE */}
        <div className="mb-6 rounded-xl bg-gradient-to-r from-black to-yellow-600 p-6 text-white shadow">
          <h1 className="text-2xl font-bold">Role Mapping</h1>
          <p className="text-sm text-yellow-200">
            Map users with roles
          </p>
        </div>

        {/* FORM */}
        <div className="mb-6 flex gap-4 items-center">
          {/* USER */}
          <select
            value={userId}
            disabled={isEditMode}
            onChange={(e) => setUserId(Number(e.target.value))}
            className="w-1/4 rounded-lg border px-4 py-3"
          >
            <option value="">Select User</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.first_name} {u.last_name}
              </option>
            ))}
          </select>

          {/* ROLES (single-select now, can be multi later) */}
          <select
            value={roleIds[0] ?? ""}
            onChange={(e) => setRoleIds([Number(e.target.value)])}
            className="w-1/4 rounded-lg border px-4 py-3"
          >
            <option value="">Select Role</option>
            {roles.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>

          <button
            onClick={handleMapRole}
            className="rounded-lg bg-gradient-to-r from-black to-yellow-600 px-6 py-3 text-white font-semibold"
          >
            {isEditMode ? "Update Mapping" : "Map Role"}
          </button>

          {isEditMode && (
            <button
              onClick={resetForm}
              className="rounded-lg border px-6 py-3 font-semibold"
            >
              Cancel
            </button>
          )}
        </div>

        {/* TABLE */}
        <div className="rounded-xl bg-white shadow">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-center">#</th>
                <th className="px-4 py-3 text-left">User</th>
                <th className="px-4 py-3 text-left">Roles</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {mappings.map((m: Mapping, index: number) => (
                <tr key={m.id} className="border-t">
                  <td className="px-4 py-3 text-center">{index + 1}</td>

                  <td className="px-4 py-3 font-semibold">
                    {m.username}
                  </td>

                  <td className="px-4 py-3">
                    {m.groups.length > 0
                      ? m.groups.map((g) => g.name).join(", ")
                      : <span className="italic text-gray-400">No roles</span>}
                  </td>

                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => handleEdit(m)}
                        className="text-blue-600 hover:scale-110"
                      >
                        <MdEdit size={20} />
                      </button>

                      <button
                        onClick={() => handleDelete(m.id)}
                        className="text-red-600 hover:scale-110"
                      >
                        <MdDelete size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {!loading && mappings.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-6 text-center text-gray-500">
                    No role mappings found
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

export default RoleMapping;
