import React, { useState } from "react";
import { Popup } from "../../Components/Popup/popup";

interface AddUserProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddUser: React.FC<AddUserProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "Student",
    isStaff: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      console.log("User Added:", form);
      setLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <Popup
      isOpen={isOpen}
      title="Add New User"
      onClose={onClose}
      onSubmit={handleSubmit}
      submitText="Save User"
      loading={loading}
    >
      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
        >
          <option>Student</option>
          <option>Teacher</option>
          <option>Admin</option>
        </select>

        <label className="flex items-center gap-2 text-sm font-semibold">
          <input
            type="checkbox"
            name="isStaff"
            checked={form.isStaff}
            onChange={handleChange}
          />
          Is Staff
        </label>
      </div>
    </Popup>
  );
};
