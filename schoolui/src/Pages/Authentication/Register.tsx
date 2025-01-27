import React from "react";
import CenteredImageLayout from "../../Components/SideImage/CenteredImageLayout";
import bgSlide from "../../assets/bgSlide.jpg";

function Register() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side: Register Form */}
      <div className="flex flex-col justify-center items-start px-8 md:px-16 w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-6">Register</h1>
        <form className="w-full max-w-sm">
          {/* Full Name Input */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              maxLength={30}
              type="text"
              id="fullName"
              className="mt-1 block h-[2rem] w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your full name"
            />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              maxLength={50}
              type="email"
              id="email"
              className="mt-1 block h-[2rem] w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          {/*Phone Number*/}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              maxLength={50}
              type="email"
              id="email"
              className="mt-1 block h-[2rem] w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your Phone Number"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              maxLength={30}
              type="password"
              id="password"
              className="mt-1 block h-[2rem] w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          {/* Confirm Password Input */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              maxLength={30}
              type="password"
              id="confirmPassword"
              className="mt-1 block h-[2rem] w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Confirm your password"
            />
          </div>
          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
        {/* Already Have an Account Link */}
        <div className="mt-6 text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block w-1/2 object-cover">
        <CenteredImageLayout imageUrl={bgSlide} />
      </div>
    </div>
  );
}

export default Register;
