import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Results: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Wrapper */}
      <div className="pt-27 min-h-screen bg-gray-100 flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-black to-yellow-600 py-16 text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">Examination Results</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
            View academic results easily by selecting the academic year, class,
            and examination.
          </p>
        </section>

        {/* Results Form Section */}
        <section className="flex-grow flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Find Your Result
            </h2>

            {/* Filters */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Academic Year */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Academic Year
                </label>
                <select className="w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:ring-yellow-500">
                  <option value="">Select Year</option>
                  <option>2020-2021</option>
                  <option>2021-2022</option>
                  <option>2022-2023</option>
                  <option>2023-2024</option>
                </select>
              </div>

              {/* Class */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Class
                </label>
                <select className="w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:ring-yellow-500">
                  <option value="">Select Class</option>
                  {[
                    "1A","1B","2A","2B","3A","3B",
                    "4A","4B","5A","5B","6A","6B",
                    "7A","7B","8A","8B","9A","9B",
                    "10A","10B"
                  ].map((cls) => (
                    <option key={cls}>{cls}</option>
                  ))}
                </select>
              </div>

              {/* Exam */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Examination
                </label>
                <select className="w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:ring-yellow-500">
                  <option value="">Select Exam</option>
                  <option>First Semester</option>
                  <option>Second Semester</option>
                  <option>Final Examination</option>
                </select>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-10 text-center">
              <button
                className="rounded-full bg-yellow-500 px-10 py-3 text-sm font-bold text-black
                           transition-all duration-300
                           hover:bg-yellow-400 hover:shadow-lg hover:scale-105"
              >
                View Result
              </button>
            </div>

            {/* Info Note */}
            <p className="mt-6 text-center text-sm text-gray-500">
              Results are published as per the school examination schedule.
            </p>
          </div>
        </section>

        {/* Highlight Bar */}
        <section className="bg-gradient-to-r from-black to-yellow-600 py-10 text-center text-white">
          <h2 className="text-xl font-semibold">
            Academic Excellence Through Transparency & Technology
          </h2>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Results;
