import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  UserPlus,
  BookOpen,
  ClipboardCheck,
  Settings,
  Menu,
  X,
} from "lucide-react";

const NAVBAR_HEIGHT = "9rem"; // matches h-28

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <Home size={20} /> },
    { name: "Add User", path: "/admin/add-user", icon: <UserPlus size={20} /> },
    { name: "Academics", path: "/admin/academics", icon: <BookOpen size={20} /> },
    { name: "Attendance", path: "/admin/attendance", icon: <ClipboardCheck size={20} /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings size={20} /> },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="fixed top-32 left-4 z-50 md:hidden bg-yellow-400 p-2 rounded-md text-black shadow"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <aside
        style={{ top: NAVBAR_HEIGHT, height: `calc(100vh - ${NAVBAR_HEIGHT})` }}
        className={`
          fixed left-0 z-40
          bg-gradient-to-b from-black to-yellow-600
          text-white shadow-2xl transition-all duration-300
          ${open ? "w-64" : "w-0 md:w-64"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-yellow-500">
          <div className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
            SIS
          </div>
          <div>
            <h2 className="text-lg font-bold">Admin Panel</h2>
            <p className="text-xs text-yellow-200">School Management</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="mt-6 flex flex-col gap-2 px-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-4 rounded-lg px-4 py-3
                 transition-all duration-300
                 ${
                   isActive
                     ? "bg-yellow-400 text-black shadow-lg"
                     : "hover:bg-yellow-500/20 hover:translate-x-1"
                 }`
              }
            >
              <span className="text-yellow-400 group-hover:text-white">
                {item.icon}
              </span>
              <span className="font-semibold tracking-wide">
                {item.name}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 w-full px-6 py-4 border-t border-yellow-500 text-xs text-yellow-200">
          © 2026 Sunrise School
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
