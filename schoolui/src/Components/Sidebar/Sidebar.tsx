import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  UserPlus,
  Users,
  ShieldCheck,
  BookOpen,
  ClipboardCheck,
  Settings,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const NAVBAR_HEIGHT = "9rem";

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(true);

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
        <nav className="mt-6 flex flex-col gap-2 px-4 text-sm">

          {/* Dashboard */}
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-lg px-4 py-3 font-semibold
              ${
                isActive
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "hover:bg-yellow-500/20"
              }`
            }
          >
            <Home size={20} />
            Dashboard
          </NavLink>

          {/* User Management (Dropdown) */}
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center justify-between rounded-lg px-4 py-3 font-semibold hover:bg-yellow-500/20 transition"
          >
            <span className="flex items-center gap-4">
              <Users size={20} />
              User Management
            </span>
            <ChevronDown
              size={18}
              className={`transition-transform ${
                userMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Submenu */}
          {userMenuOpen && (
            <div className="ml-6 flex flex-col gap-1 border-l border-yellow-400 pl-4">
              <NavLink
                to="/ListingUser"
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 transition
                  ${
                    isActive
                      ? "bg-yellow-400 text-black font-semibold"
                      : "hover:bg-yellow-500/20"
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <UserPlus size={16} />
                  Add User
                </div>
              </NavLink>

              <NavLink
                to="/roles/add"
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 transition
                  ${
                    isActive
                      ? "bg-yellow-400 text-black font-semibold"
                      : "hover:bg-yellow-500/20"
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck size={16} />
                  Add Role
                </div>
              </NavLink>

              <NavLink
                to="/roles/mapping"
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 transition
                  ${
                    isActive
                      ? "bg-yellow-400 text-black font-semibold"
                      : "hover:bg-yellow-500/20"
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <Users size={16} />
                  Role Mapping
                </div>
              </NavLink>
            </div>
          )}

          {/* Academics */}
          <NavLink
            to="/admin/academics"
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-lg px-4 py-3 font-semibold
              ${
                isActive
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "hover:bg-yellow-500/20"
              }`
            }
          >
            <BookOpen size={20} />
            Academics
          </NavLink>

          {/* Attendance */}
          <NavLink
            to="/admin/attendance"
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-lg px-4 py-3 font-semibold
              ${
                isActive
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "hover:bg-yellow-500/20"
              }`
            }
          >
            <ClipboardCheck size={20} />
            Attendance
          </NavLink>

          {/* Settings */}
          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-lg px-4 py-3 font-semibold
              ${
                isActive
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "hover:bg-yellow-500/20"
              }`
            }
          >
            <Settings size={20} />
            Settings
          </NavLink>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full px-6 py-4 border-t border-yellow-500 text-xs text-yellow-200">
          © 2026 Sunrise School
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
