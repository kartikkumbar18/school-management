import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Carousel from "../Components/Carousel/Carousel";
import Footer from "../Components/Footer/Footer";

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="mt-24 bg-gradient-to-r from-indigo-600 to-blue-500 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">
          Smart School Management System
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
          A complete digital solution to manage students, teachers, academics,
          communication, and administration efficiently.
        </p>
        <button className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 hover:bg-gray-100">
          Request a Demo
        </button>
      </section>

      {/* Vision & Mission */}
      <section className="mx-auto mt-20 max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-indigo-600">
              Our Vision
            </h2>
            <p className="leading-7 text-gray-700">
              To empower educational institutions with innovative digital tools
              that enhance learning experiences, improve transparency, and
              support holistic student development.
            </p>
          </div>

          <div className="rounded-xl bg-indigo-50 p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-indigo-600">
              Our Mission
            </h2>
            <p className="leading-7 text-gray-700">
              To simplify school operations by providing a secure, scalable, and
              user-friendly management system that connects administrators,
              teachers, students, and parents on one platform.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="my-20">
        <Carousel />
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="mb-10 text-3xl font-bold text-indigo-600">
          Powerful Features
        </h2>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {[
            "Student & Staff Management",
            "Attendance & Timetable",
            "Online Exams & Results",
            "Fees & Finance Management",
            "Parent & Teacher Portal",
            "Notices & Announcements",
            "Reports & Analytics",
            "Secure Cloud Access",
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-indigo-600">
                {feature}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Manage this module efficiently with real-time updates and
                complete transparency.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-indigo-600 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-12 text-center">
          <div>
            <h3 className="text-4xl font-bold">300+</h3>
            <p className="mt-2 opacity-90">Schools Trust Us</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">15,000+</h3>
            <p className="mt-2 opacity-90">Students Managed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">1,200+</h3>
            <p className="mt-2 opacity-90">Teachers Connected</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Transform Your School Digitally
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Join hundreds of institutions already benefiting from our modern
          school management platform.
        </p>
        <button className="mt-6 rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white hover:bg-indigo-700">
          Get Started Today
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
