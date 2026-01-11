import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Facilities", path: "/facilities" },
    { name: "Results", path: "/results" },
    { name: "Contact", path: "/Contactus" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full">
      {/* Top Info Bar */}
      <div className="flex items-center justify-between bg-amber-500 px-3 md:px-6 py-4 text-xs md:text-sm text-white">
        <span>📞 +91 234 567 8901</span>
        <span className="font-semibold tracking-wide text-center">
          Sunrise International School
        </span>
        <span className="hidden md:block text-xs font-medium">
          Academic Excellence
        </span>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between bg-gradient-to-r from-black to-yellow-600 px-4 md:px-8 py-5 md:py-6 text-white shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="../../assets/School-logo.png"
            alt="School Logo"
            className="h-20 w-20 md:h-12 md:w-12 p-1 rounded-full"
          />
          <span className="text-lg md:text-xl font-bold tracking-wide">
            Sunrise School
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {menuItems.map((item) => (
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

        {/* Desktop Login */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/login")}
            className="rounded-full bg-yellow-400 px-6 py-2 text-sm font-bold text-indigo-900
                       transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:scale-105"
          >
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-r from-black to-yellow-600 text-white shadow-lg">
          <div className="flex flex-col items-center gap-4 py-6 text-sm font-semibold">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : "hover:text-yellow-300"
                }
              >
                {item.name}
              </NavLink>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                navigate("/login");
              }}
              className="mt-2 rounded-full bg-yellow-400 px-8 py-2 text-sm font-bold text-indigo-900 hover:bg-yellow-300"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
