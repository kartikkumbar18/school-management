import React from "react";
import CenteredImageLayout from "../../Components/SideImage/CenteredImageLayout";
import bgSlide from "../../assets/bgSlide.jpg";

function ForgotPassword() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side: Forgot Password Form */}
      <div className="flex flex-col justify-center items-start px-8 md:px-16 w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
        <p className="text-sm text-gray-600 mb-6">
          Enter your registered email address, and we’ll send you instructions to reset your password.
        </p>
        <form className="w-full max-w-sm">
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              maxLength={50}
              className="mt-1 block h-[2rem] w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Reset Instructions
          </button>
        </form>
        {/* Back to Login Link */}
        <div className="mt-6 text-sm text-gray-600">
          <p>
            Remember your password?{" "}
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

export default ForgotPassword;
