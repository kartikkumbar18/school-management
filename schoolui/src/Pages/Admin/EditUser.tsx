import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../RTK/Store";
import { updateUserThunk } from "../RTK/Slice/UpdateUserSlice";

interface EditUserProps {
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  onClose: () => void;
}

export const EditUser: React.FC<EditUserProps> = ({
  isOpen,
  user,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isStaff: false,
    isActive: true,
  });
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isStaff: user.isStaff,
        isActive: user.status === "Active",
      });
    }
  }, [user]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    dispatch(
      updateUserThunk({
        id: user.id,
        payload: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
        },
      })
    );
  
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>

        <div className="space-y-4">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full rounded-md border px-4 py-2"
          />

          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full rounded-md border px-4 py-2"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-md border px-4 py-2"
          />

          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isStaff"
                checked={formData.isStaff}
                onChange={handleChange}
              />
              Staff
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
              />
              Active
            </label>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-md bg-gray-200 px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-md bg-gradient-to-r from-black to-yellow-600 px-6 py-2 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
