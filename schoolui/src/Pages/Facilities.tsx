import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export const Facilities: React.FC = () => {
  return (
    <>
      <div className="pt-27">
        <Navbar />

        <div className="text-gray-800">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-black to-yellow-600 py-20 text-center text-white">
            <h1 className="text-4xl font-bold md:text-5xl">Our Facilities</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              World-class infrastructure and smart facilities to support
              holistic learning and student development.
            </p>
          </section>

          {/* Academic Facilities */}
          <section className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="mb-10 text-center text-3xl font-bold text-yellow-600">
              Academic Facilities
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Smart Classrooms",
                  desc: "Digitally enabled classrooms with interactive boards and multimedia learning tools.",
                },
                {
                  title: "Well-Equipped Laboratories",
                  desc: "Modern Physics, Chemistry, Biology, and Computer labs for hands-on learning.",
                },
                {
                  title: "Library & Digital Resources",
                  desc: "Extensive collection of books, journals, and e-learning resources.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-6 text-center shadow transition hover:shadow-lg"
                >
                  <h3 className="mb-3 text-lg font-semibold text-yellow-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technology & Management */}
          <section className="bg-indigo-50 py-16">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="mb-10 text-center text-3xl font-bold text-yellow-600">
                Technology & School Management
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  "Student Information System",
                  "Online Attendance Tracking",
                  "Exam & Result Management",
                  "Fee & Finance Management",
                  "Parent-Teacher Portal",
                  "Homework & Notifications",
                  "Reports & Analytics",
                  "Secure Cloud Data",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-4 text-center shadow"
                  >
                    <p className="font-medium text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Sports & Co-Curricular */}
          <section className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="mb-10 text-center text-3xl font-bold text-yellow-600">
              Sports & Co-Curricular Facilities
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Sports Grounds",
                  desc: "Spacious grounds for football, cricket, athletics, and outdoor activities.",
                },
                {
                  title: "Indoor Sports",
                  desc: "Facilities for chess, table tennis, yoga, and fitness activities.",
                },
                {
                  title: "Arts & Cultural Activities",
                  desc: "Music, dance, drama, and art rooms to nurture creativity.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-6 text-center shadow transition hover:shadow-lg"
                >
                  <h3 className="mb-2 text-lg font-semibold text-yellow-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Safety & Transport */}
          <section className="bg-indigo-50 py-16">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="mb-10 text-center text-3xl font-bold text-yellow-600">
                Safety & Transport
              </h2>

              <div className="grid gap-8 md:grid-cols-3 text-center">
                <div className="rounded-xl bg-white p-6 shadow">
                  <h3 className="mb-2 text-lg font-semibold text-yellow-600">
                    Campus Safety
                  </h3>
                  <p className="text-gray-600">
                    CCTV surveillance, secure entry points, and trained staff.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow">
                  <h3 className="mb-2 text-lg font-semibold text-yellow-600">
                    Transport Facility
                  </h3>
                  <p className="text-gray-600">
                    GPS-enabled school buses with trained drivers and attendants.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow">
                  <h3 className="mb-2 text-lg font-semibold text-yellow-600">
                    Medical Support
                  </h3>
                  <p className="text-gray-600">
                    First-aid facilities and regular health check-ups.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Campus Environment */}
          <section className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-yellow-600">
              Campus Environment
            </h2>
            <p className="mx-auto max-w-3xl text-gray-700 leading-7">
              Our campus provides a clean, green, and student-friendly
              environment designed to promote learning, discipline, and
              well-being. Every facility is thoughtfully planned to support
              academic excellence and personal growth.
            </p>
          </section>

          {/* Highlight Bar */}
          <section className="bg-gradient-to-r from-black to-yellow-600 py-12 text-center text-white">
            <h2 className="text-3xl font-bold">
              Building Strong Foundations for Future Leaders
            </h2>
          </section>
        </div>
        <hr className="text-white"/>
      </div>

      <Footer />
    </>
  );
};
