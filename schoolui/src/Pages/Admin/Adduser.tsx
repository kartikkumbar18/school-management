import React, { useEffect, useState } from "react";
import { Popup } from "../../Components/Popup/popup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../RTK/Store";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUser, resetAddUserState, fetchUsers } from "../RTK/Slice/AddUserSlice";

interface AddUserProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddUser: React.FC<AddUserProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { addLoading, addSuccess, error } = useSelector(
    (state: RootState) => state.users
  );

  const [form, setForm] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isStaff: false,
  });

  const [passwordError, setPasswordError] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  // Handle submit
  const handleSubmit = () => {
    if (form.password !== form.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError(null);

    dispatch(
      addUser({
        username: form.userName,
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        password: form.password,
        is_staff: form.isStaff,
      })
    );
  };

  // Watch for success or error to show toast
  useEffect(() => {
    if (addSuccess) {
      toast.success("User added successfully!");
      dispatch(fetchUsers()); // Refresh user list
      onClose(); // Close popup
      dispatch(resetAddUserState()); // Reset slice state
      // Clear form fields
      setForm({
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        isStaff: false,
      });
    }

    if (error) {
      toast.error(`Failed to add user: ${error}`);
    }
  }, [addSuccess, error, dispatch, onClose]);

  return (
    <Popup
      isOpen={isOpen}
      title="Add New User"
      onClose={onClose}
      onSubmit={handleSubmit}
      submitText="Save User"
      loading={addLoading}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="userName"
          placeholder="Username"
          value={form.userName}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
        />
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
        />
        <label className="flex items-center gap-2 text-sm font-semibold">
          <input
            type="checkbox"
            name="isStaff"
            checked={form.isStaff}
            onChange={handleChange}
          />
          Is Staff
        </label>

        {passwordError && (
          <p className="col-span-2 text-sm text-red-600">{passwordError}</p>
        )}
      </div>
    </Popup>
  );
};
