import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const naviagte = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleLogin = () => {
    naviagte('/login');
  }

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} shadow-md`}>
      {/* First Division */}
      <div className="flex items-center justify-between px-4 py-2 text-sm border-b border-gray-300 dark:border-gray-700">
        <div className="flex-1 text-left">+91 234 567 8901</div>
        <div className="flex-1 text-center font-bold">Dummy School Name</div>
        <div className="flex-1 text-right">
          <button
            onClick={toggleDarkMode}
            className="p-2 border rounded-md focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>

      {/* Second Division */}
      <div className="flex items-center justify-between px-6 py-4 text-lg">
        <div className="flex-1">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="flex-1 text-center space-x-4">
        <a href='/' className="hover:text-black dark:hover:text-black font-bold hover:border hover:border-amber-800 hover:shadow-md hover:shadow-amber-800 hover:rounded-lg px-2 py-1">Home</a>
          <a href="#about" className="hover:text-black dark:hover:text-black font-bold hover:border hover:border-amber-800 hover:shadow-md hover:shadow-amber-800 hover:rounded-lg px-2 py-1">About</a>
          <a href="#contact" className="hover:text-black dark:hover:text-black font-bold hover:border hover:border-amber-800 hover:shadow-md hover:shadow-amber-800 hover:rounded-lg px-2 py-1">Facilities</a>
          <a href='/results' className="hover:text-black dark:hover:text-black font-bold hover:border hover:border-amber-800 hover:shadow-md hover:shadow-amber-800 hover:rounded-lg px-2 py-1">Results</a>
          <a href="#contact" className="hover:text-black dark:hover:text-black font-bold hover:border hover:border-amber-800 hover:shadow-md hover:shadow-amber-800 hover:rounded-lg px-2 py-1">Contact Us</a>
        </div>
        <div className="flex-1 text-right">
          <button className="hover:text-black dark:hover:text-black font-bold hover:border hover:border-amber-800 hover:shadow-md hover:shadow-amber-800 hover:rounded-lg px-2 py-1"
          onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
