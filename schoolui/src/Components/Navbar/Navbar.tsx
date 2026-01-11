import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 z-50 w-full">
      {/* Top Info Bar */}
      <div className="flex items-center justify-between bg-amber-500 px-6 py-2 text-sm text-white">
        <span>📞 +91 234 567 8901</span>
        <span className="font-semibold tracking-wide">
          Sunrise International School
        </span>
        <span className="text-xs font-medium">Academic Excellence</span>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between bg-gradient-to-r from-black to-yellow-600 px-8 py-4 text-white shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="School Logo"
            className="h-10 w-10 rounded-full bg-white p-1"
          />
          <span className="text-xl font-bold tracking-wide">
            Sunrise School
          </span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Facilities", path: "/facilities" },
            { name: "Results", path: "/results" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative px-3 py-1 transition-all duration-300
                 hover:text-yellow-300
                 after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                 after:w-0 after:bg-yellow-300 after:transition-all
                 hover:after:w-full
                 ${isActive ? "text-yellow-300 after:w-full" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Login Button */}
        <button
          onClick={() => navigate("/login")}
          className="rounded-full bg-yellow-400 px-6 py-2 text-sm font-bold text-indigo-900
                     transition-all duration-300
                     hover:bg-yellow-300 hover:shadow-lg hover:scale-105"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
